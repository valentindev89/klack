import { useState, useEffect, useContext, forwardRef } from 'react';
import { UserContext } from 'context/UserContext';
import { useInView } from 'react-intersection-observer';
import { transformMessage } from 'utils/helper';

import Actions from './Actions';
import Reactions from './Reactions';
import Replies from './Replies';
import Editor from './Editor';

import MessageWrapper from './_MessageWrapper';

import * as S from './Message.styled';

const Message = forwardRef(
  (
    {
      message,
      isChild,
      onEdit,
      onThreadOpen,
      isThread,
      noActions,
      className,
      unread,
      onEntryInView,
      isPreview,
      isFirstMessage,
    },
    forwardedRef
  ) => {
    const { user, getMessageQueue } = useContext(UserContext);
    const [isEditing, setEditing] = useState(false);
    const [showActions, setShowActions] = useState(false);

    const toggleEditing = () => setEditing(!isEditing);

    const editMessage = editedValue => {
      if (message.body !== editedValue) {
        onEdit(editedValue, message.id);
      }
      toggleEditing();
    };

    const [intersectionRef, inView] = useInView({
      triggerOnce: true,
      threshold: 0,
    });

    useEffect(() => {
      if (unread && inView) {
        onEntryInView(message);
      }
    }, [inView]);

    const setShow = value => {
      setShowActions(value);
    };

    const showReactions = !isEditing && message.reactions && message.reactions.length > 0;
    const showReplies = !isThread && !isPreview && message.children.length > 0;

    const canShowAction = !noActions && !isEditing && user;
    let isDeleted = false;
    if (user) {
      const deletedMessages = getMessageQueue();
      if (deletedMessages.filter(e => e === message.id).length > 0) isDeleted = true;
    }
    return (
      <S.MessageContainer
        show={canShowAction && showActions}
        onMouseLeave={() => setShowActions(false)}
        onMouseEnter={() => setShowActions(true)}
        onMouseOver={() => setShowActions(true)}
        onFocus={() => setShowActions(true)}
        editing={isEditing}
        unread={unread}
        className={className || ''}
        ref={forwardedRef}
        isFirstMessage={isFirstMessage}
      >
        <MessageWrapper
          message={message}
          isEditing={isEditing}
          isChild={isChild}
          isDeleted={isDeleted}
        >
          {isEditing ? (
            <Editor
              initialValue={transformMessage(message.body)}
              onCancel={toggleEditing}
              onSubmit={editMessage}
            />
          ) : (
            <S.Body child={isChild}>{transformMessage(message.body)}</S.Body>
          )}
          {showReactions && <Reactions reactions={message.reactions} messageId={message.id} />}
          {showReplies && (
            <Replies reply={message.children} onClick={() => onThreadOpen(message.id)} />
          )}
        </MessageWrapper>
        {canShowAction && showActions && (
          <Actions
            setShow={setShow}
            isThread={isThread}
            onEdit={toggleEditing}
            onReply={() => onThreadOpen(message.id)}
            message={message}
          />
        )}
        <div ref={intersectionRef} />
      </S.MessageContainer>
    );
  }
);

export default Message;
