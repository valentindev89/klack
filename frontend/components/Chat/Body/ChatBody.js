/* eslint-disable no-underscore-dangle */
import { Fragment, useEffect, useState, useRef } from 'react';
import { groupBy } from 'lodash';
import moment from 'moment';
import Message from 'components/Chat/Message/Message';
import UnreadLabel from 'components/UI/UnreadLabel';
import ChatBodyPlaceholder, { ChatBodyEmpty } from './ChatBodyPlaceholder';
import * as S from './ChatBody.styled';

const ChatBody = ({
  onThreadOpen,
  messages,
  onEdit,
  loading,
  unreadCount,
  scrollMessageId,
  onReachTopEnd,
  isFirstMessageReached,
  onReachBottomEnd,
  isLastMessageReached,
  lastReadTime,
  updateChannelInfo,
  unreadMessagesNumber,
  userId,
}) => {
  const scrollView = useRef(null);
  const scrollMessage = useRef(null);
  const [isFirstLoad, setFirstLoad] = useState(true);
  const [prevChatHeight, setPrevChatHeight] = useState(0);
  const [isFetching, setFetching] = useState(true);
  const [isUnreadLabelVisible, setUnreadLabel] = useState(true);

  const closeUnreadLabel = () => {
    setUnreadLabel(false);
  };

  const scrollToLastMessage = () => {
    const chat = scrollView.current && scrollView.current._container;

    chat.scrollTop = chat.scrollHeight;
  };

  const scrollToMessage = messageRef => {
    if (!messageRef.current) return;

    scrollView.current._container.scrollTop = messageRef.current.offsetTop - 20;
  };

  useEffect(() => {
    const chat = scrollView.current && scrollView.current._container;

    if (chat) {
      const isScrolled = prevChatHeight !== chat.scrollTop + chat.offsetHeight;

      setPrevChatHeight(chat.scrollHeight);
      if ((!isFirstLoad && !isScrolled) || (!scrollMessageId && !unreadMessagesNumber)) {
        scrollToLastMessage();
        setFetching(false);
      } else {
        if (!isFirstLoad) return;
        setTimeout(() => {
          scrollToMessage(scrollMessage);
          setFetching(false);
        }, 200);
      }

      setFirstLoad(false);
    }
  }, [messages.length]);

  if (loading) {
    return <ChatBodyPlaceholder />;
  }

  if (messages.length === 0) {
    return <ChatBodyEmpty />;
  }

  const messagesByDay = groupBy(messages, date =>
    moment(date)
      .startOf('day')
      .format()
  );

  const handleReachTop = async container => {
    if (isFetching || isFirstLoad || isFirstMessageReached) return;

    const prevHeight = container.scrollHeight;
    setFetching(true);
    const resultArray = await onReachTopEnd();
    const afterHeight = container.scrollHeight;

    const scrollTop = afterHeight - prevHeight;

    if (scrollTop && resultArray.length) {
      scrollView.current._container.scrollTop = scrollTop;
    }
    setFetching(false);
  };

  const handleReachBottom = async container => {
    if (isFetching || isLastMessageReached) return;

    const prevHeight = container.scrollTop;
    setFetching(true);
    const resultArray = await onReachBottomEnd();

    if (resultArray.length) {
      scrollView.current._container.scrollTop = prevHeight;
    }

    setFetching(false);
  };

  const handleScrollUp = container => {
    if (container.scrollTop < 400) {
      handleReachTop(container);
    }
  };

  const handleScrollDown = container => {
    if (container.scrollHeight - (container.scrollTop + container.offsetHeight) < 400) {
      handleReachBottom(container);
    }
  };

  return (
    <>
      <S.Container
        ref={scrollView}
        onYReachStart={handleReachTop}
        onYReachEnd={handleReachBottom}
        onScrollUp={handleScrollUp}
        onScrollDown={handleScrollDown}
        options={{
          suppressScrollX: true,
        }}
      >
        {Object.entries(messagesByDay).map(([date, messagesList]) => {
          return (
            <Fragment key={date}>
              <S.Date date={date}>
                <S.DateText>{moment(date).format('dddd, MMM Do')}</S.DateText>
              </S.Date>
              {messagesList.map((message, index, list) => {
                const isAuthor = userId === message.author.id;
                const previousMessage = list[index - 1];
                const nextMessage = list[index + 1];

                const isChild =
                  previousMessage && previousMessage.author.username === message.author.username;

                const isNextChild =
                  nextMessage && nextMessage.author.username === message.author.username;

                const isDirectLink = scrollMessageId === message.id;
                const isLastReadedMessage =
                  new Date(message.createdAt).getTime() === new Date(lastReadTime).getTime();
                const isNewMessage =
                  userId &&
                  !isAuthor &&
                  new Date(lastReadTime).getTime() < new Date(message.createdAt).getTime();

                return (
                  <Fragment key={message.id}>
                    {index === list.length - unreadCount && (
                      <S.NewMessage>
                        <S.NewMessageText>new messages</S.NewMessageText>
                      </S.NewMessage>
                    )}
                    {isDirectLink || (!scrollMessageId && isLastReadedMessage) ? (
                      <Message
                        message={message}
                        isChild={isChild}
                        onEdit={onEdit}
                        onThreadOpen={onThreadOpen}
                        unread={isNewMessage}
                        ref={scrollMessage}
                        onEntryInView={updateChannelInfo}
                      />
                    ) : (
                      <Message
                        message={message}
                        isChild={isChild}
                        isFirstMessage={!isChild && isNextChild}
                        onEdit={onEdit}
                        onThreadOpen={onThreadOpen}
                        unread={isNewMessage}
                        onEntryInView={updateChannelInfo}
                      />
                    )}
                  </Fragment>
                );
              })}
            </Fragment>
          );
        })}
      </S.Container>
      {!!unreadMessagesNumber && isUnreadLabelVisible && (
        <UnreadLabel
          unreadMessagesNumber={unreadMessagesNumber}
          onScroll={scrollToLastMessage}
          onClose={closeUnreadLabel}
        />
      )}
      {/*
       */}
    </>
  );
};

export default ChatBody;
