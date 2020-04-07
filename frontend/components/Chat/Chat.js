import { useEffect, useCallback, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useDropzone } from 'react-dropzone';
import { throttle } from 'lodash';

import { UserContext } from 'context/UserContext';
import { AppContext } from 'context';
import {
  GET_LAST_MESSAGES,
  GET_PREV_MESSAGES,
  GET_NEXT_MESSAGES,
  EDIT_MESSAGE,
} from 'apis/Message';
import { UPDATE_CHANNEL_INFO } from 'apis/ChannelInfo';
import { SET_CURRENT_CHANNEL } from 'apis/User';
import { COMPANY_NAME } from 'utils/config';

import ChatHeader from 'components/Chat/Header';
import ChatBody from 'components/Chat/Body';
import ChatInput from 'components/Chat/Input';

import DropzoneOverlay from 'components/UI/Dropzone';
import Thread from 'components/Chat/Thread';
import Subscriptions from 'components/Chat/Chat.subscriptions';

import * as S from './Chat.styled';

const Chat = () => {
  const [subscriptChannels, setSubscriptChannels] = useState({});
  const [threadMessage, setThreadMessage] = useState(null);
  const [channelInfo, setChannelInfo] = useState(null);
  const [attachments, setAttachments] = useState([]);
  const [isFirstMessageReached, setFirstMessageReached] = useState(false);
  const [isLastMessageReached, setLastMessageReached] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  const { community: communityUrl, channel: channelUrl, linkMessageId, threadId } = router.query;

  const { chatLoaded, setChatLoaded } = useContext(AppContext);

  const { data: { messages = [] } = {}, loading, subscribeToMore, fetchMore } = useQuery(
    GET_LAST_MESSAGES,
    {
      variables: {
        channelUrl: `${communityUrl}/${channelUrl}`,
        cursorId: threadId || linkMessageId,
      },
      onCompleted: () => {
        if (!chatLoaded) {
          setChatLoaded(true);
        }
      },
    }
  );
  const unreadCount = 0;

  const [editMessageMutation] = useMutation(EDIT_MESSAGE);
  const [updateChannelInfoMutation] = useMutation(UPDATE_CHANNEL_INFO);
  const [setCurrentChannel] = useMutation(SET_CURRENT_CHANNEL);

  useEffect(() => {
    if (threadId) {
      setThreadMessage(threadId);
    }
  }, [linkMessageId]);

  const unreadMessagesCount = () => {
    if (user && channelInfo) {
      return messages.filter(
        ({ createdAt, author: { id } }) =>
          id !== user.id &&
          new Date(createdAt).getTime() > new Date(channelInfo.lastUpdateAt).getTime()
      ).length;
    }
    return 0;
  };

  const throttledUpdate = useCallback(
    throttle(async message => {
      try {
        const updatedUser = await updateChannelInfoMutation({
          variables: {
            date: `${message.createdAt}`,
            channelUrl: `${communityUrl}/${channelUrl}`,
          },
        });

        setUser(updatedUser.data.updateChannelInfo);
      } catch (error) {
        // alert(error);
      }
    }, 3000),
    [communityUrl, channelUrl]
  );

  const updateChannelInfo = async message => {
    if (
      channelInfo &&
      new Date(message.createdAt).getTime() < new Date(channelInfo.lastUpdateAt).getTime()
    ) {
      return;
    }

    throttledUpdate(message);
  };

  useEffect(() => {
    return () => {
      setCurrentChannel({ variables: { channelUrl: `${communityUrl}/general` } });
    };
  }, []);

  useEffect(() => {
    if (user) {
      const currentChannelInfo = user.channelsInfo.find(
        ({ channel }) => channel.url === `${communityUrl}/${channelUrl}`
      );

      if (currentChannelInfo) {
        setChannelInfo(currentChannelInfo);
      }
    }
  }, [user, communityUrl, channelUrl]);

  useEffect(() => {
    if (channelUrl && !subscriptChannels[`${communityUrl}/${channelUrl}`]) {
      subscriptChannels[`${communityUrl}/${channelUrl}`] = true;
      setSubscriptChannels(subscriptChannels);
      Subscriptions({ subscribeToMore, channelUrl, communityUrl });
    }

    setCurrentChannel({ variables: { channelUrl: `${communityUrl}/${channelUrl}` } });
  }, [communityUrl, channelUrl]);

  const handleEditMessage = async (body, messageId) => {
    try {
      await editMessageMutation({ variables: { body, messageId } });
    } catch (error) {
      // alert(error);
    }
  };

  const closeThread = () => {
    setThreadMessage(null);
  };

  const handleScrollTopReachEnd = async () => {
    try {
      const result = await fetchMore({
        query: GET_PREV_MESSAGES,
        variables: {
          channelUrl: `${communityUrl}/${channelUrl}`,
          cursorId: messages[0].id,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult.messages.length) {
            setFirstMessageReached(true);
            return prev;
          }
          const mergedMessages = [].concat(fetchMoreResult.messages, prev.messages);
          return { ...prev, messages: mergedMessages };
        },
      });

      return result.data.messages;
    } catch (error) {
      return [];
    }
  };

  const handleScrollBottomReachEnd = async () => {
    try {
      const result = await fetchMore({
        query: GET_NEXT_MESSAGES,
        variables: {
          channelUrl: `${communityUrl}/${channelUrl}`,
          cursorId: messages[messages.length - 1].id,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult.messages.length) {
            setLastMessageReached(true);
            return prev;
          }

          const mergedMessages = [].concat(prev.messages, fetchMoreResult.messages);
          return { ...prev, messages: mergedMessages };
        },
      });

      return result.data.messages;
    } catch (error) {
      return [];
    }
  };

  const fetchMessagesById = async id => {
    try {
      await fetchMore({
        variables: { cursorId: id },
        updateQuery: (prev, { fetchMoreResult }) => ({
          ...prev,
          messages: fetchMoreResult.messages,
        }),
      });
    } catch (error) {
      return [];
    }
  };

  const onDrop = useCallback(acceptedFiles => {
    setAttachments(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  if (communityUrl === 'direct' && user) {
    if (channelUrl.indexOf(`${user.username}-`) === -1) {
      return router.push(`/${COMPANY_NAME()}/general/general`);
    }
  }
  return (
    <>
      <S.Container {...getRootProps({ onClick: e => e.stopPropagation(), disabled: true })}>
        <S.ZoomImage />
        <ChatHeader fetchMessagesById={fetchMessagesById} />

        <ChatBody
          onThreadOpen={setThreadMessage}
          messages={messages}
          onEdit={handleEditMessage}
          loading={loading}
          unreadCount={unreadCount}
          scrollMessageId={threadId || linkMessageId}
          isFirstMessageReached={isFirstMessageReached}
          isLastMessageReached={isLastMessageReached}
          onReachTopEnd={handleScrollTopReachEnd}
          onReachBottomEnd={handleScrollBottomReachEnd}
          lastReadTime={channelInfo && channelInfo.lastUpdateAt}
          updateChannelInfo={updateChannelInfo}
          unreadMessagesNumber={unreadMessagesCount()}
          userId={user && user.id}
        />
        <ChatInput dropzoneItems={attachments} />
        <input {...getInputProps({ disabled: true })} />
        {isDragActive && <DropzoneOverlay />}
      </S.Container>
      <Thread
        message={messages.find(({ id }) => id === threadMessage)}
        onClose={closeThread}
        scrollMessageId={linkMessageId}
      />
    </>
  );
};
export default Chat;
