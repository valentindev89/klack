import Reply from './Reply';
import Reaction from './Reaction';
import More from './More';

import * as S from './MessageActions.styled';

const MessageActions = ({ onEdit, onReply, isThread, message, show, setShow }) => {
  return (
    <S.Actions show={show}>
      {!isThread && <Reply onReply={onReply} />}
      <Reaction messageId={message.id} setShow={setShow} />
      <More
        isThread={isThread}
        onEdit={onEdit}
        messageId={message.id}
        messageAuthor={message.author}
        setShow={setShow}
      />
    </S.Actions>
  );
};

export default MessageActions;
