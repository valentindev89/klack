import { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { UserContext } from 'context/UserContext';
import dynamic from 'next/dynamic';
import cuid from 'cuid';
import { SEND_MESSAGE, GET_LAST_MESSAGES } from 'apis/Message';
import plusIcon from 'public/icons/plus.svg';
import InputComponent from './InputComponent';
import * as S from './ChatInput.styled';

const DynamicTypingStatus = dynamic(() => import('./TypingStatus/TypingStatus'), { ssr: false });

const ChatInput = ({ dropzoneItems }) => {
  const [sendMessage] = useMutation(SEND_MESSAGE);
  const { user } = useContext(UserContext);

  const handleSendMessage = async ({
    body,
    channelUrl,
    communityUrl,
    mentions,
    attachments,
    urlList,
  }) => {
    const message = {
      body,
      attachments,
      channelUrl: `${communityUrl}/${channelUrl}`,
      urlList,
      mentions: mentions ? mentions.map(e => e.id) : [],
      communityUrl,
    };

    await sendMessage({
      variables: message,
      optimisticResponse: {
        __typename: 'Mutation',
        sendMessage: {
          __typename: 'Message',
          ...message,
          id: cuid(),
          createdAt: new Date(),
          updatedAt: new Date(),
          attachments: [],
          remoteAttachments: [],
          children: [],
          reactions: [],
          author: user,
        },
      },
      update: (proxy, { data: { sendMessage: sendMessageData } }) => {
        const data = proxy.readQuery({
          query: GET_LAST_MESSAGES,
          variables: {
            channelUrl: `${communityUrl}/${channelUrl}`,
          },
        });

        let messagesData = { ...data };
        if (data.messages.filter(message => message.id === sendMessageData.id).length === 0) {
          messagesData = {
            ...data,
            messages: [...data.messages, sendMessageData],
          };
        }

        proxy.writeQuery({
          query: GET_LAST_MESSAGES,
          data: messagesData,
          variables: {
            channelUrl: `${communityUrl}/${channelUrl}`,
          },
        });
      },
    });

    return true;
  };

  return (
    <S.ChatInputWrapper>
      <S.AddButton>
        <S.PlusIcon>
          <use xlinkHref={`${plusIcon}#icon-plus`} />
        </S.PlusIcon>
      </S.AddButton>
      <InputComponent onSendMessage={handleSendMessage} dropzoneItems={dropzoneItems} />
      <DynamicTypingStatus />
    </S.ChatInputWrapper>
  );
};

export default ChatInput;
