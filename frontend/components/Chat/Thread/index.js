import { useCallback, useState, useRef, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useMutation } from '@apollo/react-hooks';
import { EDIT_REPLY_MESSAGE } from 'apis/Message';
import { CloseIcon } from 'components/UI/Icons';

import DropzoneOverlay from 'components/UI/Dropzone';
import PortalWrapper from 'components/UI/PortalWrapper';
import Message from 'components/Chat/Message';
import ThreadInput from './ThreadInput';
import * as S from './styled';

const ThreadRightBar = ({ message, onClose, onCopyLink, scrollMessageId }) => {
  const scrollView = useRef(null);
  const scrollMessage = useRef(null);
  const [editReplyMessage] = useMutation(EDIT_REPLY_MESSAGE);

  const [attachments, setAttachments] = useState([]);
  const [isNeedScroll, setScrollStatus] = useState(true);

  const onKeyDown = e => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (process.browser) {
      window.addEventListener('keydown', onKeyDown);
      return () => {
        window.removeEventListener('keydown', onKeyDown);
      };
    }
    return window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const threadChat = scrollView.current && scrollView.current._container;

    if (threadChat) {
      threadChat.scrollTop = threadChat.scrollHeight;
    }
  }, [message]);

  const onDrop = useCallback(acceptedFiles => {
    setAttachments(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  const scrollToMessage = messageRef => {
    if (!messageRef.current) return;

    scrollView.current.scrollTop = messageRef.current.offsetTop - 20;
  };

  useEffect(() => {
    if (isNeedScroll && message) {
      scrollToMessage(scrollMessage);
      setScrollStatus(false);
    }
  }, [message]);

  const handleEdit = (body, messageId) => {
    editReplyMessage({
      variables: {
        messageId,
        body,
      },
    });
  };

  const handleCopyLink = ({ id }) => {
    onCopyLink({ id, parentId: message.id });
  };

  const eraseAttachments = () => {
    setAttachments([]);
  };

  return (
    <PortalWrapper show={message} portalKey="thread">
      {message && (
        <S.Wrapper
          {...getRootProps({
            onClick: e => e.stopPropagation(),
          })}
        >
          <S.Container>
            <S.Header>
              <div>
                <S.Title>Thread</S.Title>
                <S.Subtitle>{`#${message.author.username || message.author.name}`}</S.Subtitle>
              </div>
              <CloseIcon onClick={onClose} style={{ position: 'initial' }} />
            </S.Header>
            <S.Content ref={scrollView}>
              <Message message={message} isThread noActions className="parent-message" />
              {/*
              <S.ReplyNumber>
                <span>{`${message.children.length} replies`}</span>
              </S.ReplyNumber>
              */}
              <S.MessageList>
                {message.children.map((children, index, list) => {
                  const isDirectLink = scrollMessageId === children.id;
                  const previousMessage = list[index - 1];
                  const isChild =
                    previousMessage && previousMessage.author.username === message.author.username;

                  return isDirectLink ? (
                    <Message
                      message={children}
                      className="message"
                      isThread
                      isChild={isChild}
                      onEdit={handleEdit}
                      key={children.id}
                      onCopyLink={handleCopyLink}
                      isDirectLink={isDirectLink}
                      ref={scrollMessage}
                    />
                  ) : (
                    <Message
                      message={children}
                      className="message"
                      isThread
                      isChild={isChild}
                      onEdit={handleEdit}
                      key={children.id}
                      onCopyLink={handleCopyLink}
                    />
                  );
                })}
              </S.MessageList>
            </S.Content>
          </S.Container>
          <input {...getInputProps()} />
          <ThreadInput
            messageId={message.id}
            dropzoneItems={attachments}
            eraseAttachments={eraseAttachments}
          />
          {isDragActive && <DropzoneOverlay />}
        </S.Wrapper>
      )}
    </PortalWrapper>
  );
};

export default ThreadRightBar;
