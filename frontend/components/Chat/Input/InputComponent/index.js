import { useState, useEffect, useContext, useCallback } from 'react';
import { UserContext } from 'context/UserContext';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { Mention } from 'react-mentions';
import { useEscapeToClose } from 'hooks';
import { throttle } from 'lodash';

import { COMPANY_NAME } from 'utils/config';
import { GET_USERS } from 'apis/User';
import { SET_USER_TYPING_STATUS } from 'apis/Message';
import { UploadManagerContext } from 'context/UploadManager';

import docPreview from 'public/icons/document-preview.png';
import emojiIcon from 'public/icons/smile.svg';

import AttachmentItem from './AttachmentItem';
import * as S from './styled';

const InputComponent = ({
  children,
  onSendMessage,
  dropzoneItems,
  eraseAttachments = () => {},
  placeholder,
}) => {
  const {
    query: { channel: channelUrl, community: communityUrl },
    push,
  } = useRouter();

  useEscapeToClose(() => document.getElementById('vs-input').blur());

  const [body, setBody] = useState('');
  const [mentions, onMentionsSet] = useState([]);
  const { user: loggedUser } = useContext(UserContext);
  const { addUploadToQueue } = useContext(UploadManagerContext);
  const [getUsers] = useMutation(GET_USERS);
  const [setUserTypingStatus] = useMutation(SET_USER_TYPING_STATUS);

  const [attachments, setAttachments] = useState([]);
  const [attachmentPreviews, setAttachmentPreviews] = useState([]);
  const [status, setStatus] = useState(null);

  const updateTypingStatus = isTyping => {
    setUserTypingStatus({
      variables: {
        isTyping,
        channelUrl: `${communityUrl}/${channelUrl}`,
      },
    });
  };

  const throttledTypingStatusUpdate = useCallback(
    throttle(
      isTyping => {
        updateTypingStatus(isTyping);
      },
      2000,
      { trailing: false }
    ),
    [channelUrl, communityUrl]
  );

  const handleFileAdd = fileList => {
    if (process.browser) {
      setAttachments([...attachments, ...fileList]);

      const previewList = Array.prototype.map.call(fileList, file =>
        file.type.includes('image/') ? URL.createObjectURL(file) : docPreview
      );

      setAttachmentPreviews([...attachmentPreviews, ...previewList]);
    }
  };

  const checkUrlAttachments = messageBody => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urlList = messageBody.match(urlRegex);

    return urlList;
  };

  useEffect(() => {
    if (dropzoneItems) handleFileAdd(dropzoneItems);
  }, [dropzoneItems]);

  const handleSendMessage = () => {
    if (!loggedUser) {
      push(`/[company]/login`, `/${COMPANY_NAME()}/login`, {
        shallow: true,
      });
    } else {
      setStatus('SEND_MESSAGE');
      const urlList = checkUrlAttachments(body);
      if (attachments.length) {
        // eslint-disable-next-line
        process.browser && document.getElementById('sound-message').play();
        addUploadToQueue({
          data: {
            attachments,
          },
          onSendMessage: fileList => {
            return onSendMessage({
              body,
              channelUrl,
              communityUrl,
              mentions,
              attachments: fileList,
              urlList,
            });
          },
        });
      } else if (body !== '') {
        // eslint-disable-next-line
        process.browser && document.getElementById('sound-message').play();
        onSendMessage({
          body,
          channelUrl,
          communityUrl,
          mentions,
          urlList,
        });
      }
    }

    setAttachmentPreviews([]);
    setBody('');
    setAttachments([]);
    eraseAttachments();
    setStatus(null);
    throttledTypingStatusUpdate.cancel();
  };

  const onKeyDown = e => {
    // Sending message
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!(status === 'SEND_MESSAGE')) {
        handleSendMessage();
      }
    }
  };

  const removeAttachmentFromList = number => {
    setAttachmentPreviews(attachmentPreviews.filter((el, i) => i !== number));
    setAttachments(attachments.filter((el, i) => i !== number));
  };

  const handleInputChange = (e, a, b, newMentions) => {
    const isInputEmpty = e.target.value.length === 0;
    setBody(e.target.value);

    if (!isInputEmpty) {
      throttledTypingStatusUpdate(true);
    }

    onMentionsSet(newMentions);
  };

  return (
    <S.Container className={status === 'SEND_MESSAGE' ? 'disabled' : ''}>
      {!!attachmentPreviews.length &&
        attachmentPreviews.map((url, i) => (
          <AttachmentItem
            url={url}
            key={url}
            attachmentNumber={i}
            onClick={removeAttachmentFromList}
          />
        ))}
      <S.ReactionIcon>
        <use xlinkHref={`${emojiIcon}#icon-smile`} />
      </S.ReactionIcon>
      <S.InputWrapper>
        <S.Input
          id="vs-input"
          placeholder={placeholder || 'What’s happening?'}
          type="text"
          value={body}
          onChange={handleInputChange}
          onKeyDown={e => onKeyDown(e)}
          style={S.MentionInputStyles}
          allowSuggestionsAboveCursor
        >
          <Mention
            trigger="@"
            displayTransform={name => `@${name}`}
            data={async (searchString, callback) => {
              const { data: { users = [] } = {} } = await getUsers({
                variables: { searchString },
              });
              callback(
                users.map(user => ({
                  id: user.username,
                  display: user.fullname,
                  username: user.username,
                  isOnline: user.isOnline,
                }))
              );
            }}
            style={S.MentionStyles}
            appendSpaceOnAdd
            renderSuggestion={user => (
              <S.ListItem>
                <S.Avatar name={user.username} />
                <S.Fullname>{user.display}</S.Fullname>
                <S.Username>{`@${user.username}`}</S.Username>
                <S.Status online={user.isOnline} />
              </S.ListItem>
            )}
          />
        </S.Input>
      </S.InputWrapper>
      {loggedUser ? (
        body !== '' && <S.SendButton onClick={handleSendMessage}>Send</S.SendButton>
      ) : (
        <S.SendButton
          style={{ padding: '0 16px', width: 'auto' }}
          onClick={() =>
            push(`/[company]/login`, `/${COMPANY_NAME()}/login`, {
              shallow: true,
            })
          }
        >
          Login
        </S.SendButton>
      )}
      {children}
      <S.Overlay className="overlay" />
    </S.Container>
  );
};

export default InputComponent;
