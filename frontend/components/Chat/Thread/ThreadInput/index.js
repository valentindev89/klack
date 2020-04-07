import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { REPLY_MESSAGE, SEND_NOTIFICATION } from 'apis/Message';
import InputComponent from 'components/Chat/Input/InputComponent';
import * as S from './styled';

const ThreadChat = ({ messageId, dropzoneItems, eraseAttachments }) => {
  const [sendReplyMessage] = useMutation(REPLY_MESSAGE);
  const [sendNotification] = useMutation(SEND_NOTIFICATION);
  const {
    query: { community: communityUrl, channel: channelUrl },
  } = useRouter();

  const handleMessage = async ({ body, attachments, mentions, urlList }) => {
    const message = {
      body,
      parentId: messageId,
      attachments,
      urlList,
    };

    await sendReplyMessage({
      variables: message,
    });

    if (mentions) {
      mentions.map(mention =>
        sendNotification({
          variables: {
            messageId,
            receiverName: mention.id,
            channelUrl: `${communityUrl}/${channelUrl}`,
            communityUrl,
          },
        })
      );
    }

    return true;
  };

  return (
    <S.ThreadInputWrapper>
      <InputComponent
        onSendMessage={handleMessage}
        placeholder="Your reply"
        dropzoneItems={dropzoneItems}
        eraseAttachments={eraseAttachments}
      />
    </S.ThreadInputWrapper>
  );
};

export default ThreadChat;
