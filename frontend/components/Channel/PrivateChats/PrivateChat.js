import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from 'context/UserContext';
import { useQuery } from '@apollo/react-hooks';
import { USER_WENT_ONLINE, USER_WENT_OFFLINE } from 'apis/User';
import { GET_UNREAD_MESSAGES } from 'apis/Message';
import { NOTIFICATIONS_SUBSCRIPTION } from 'apis/Notification';
import { useRouter } from 'next/router';
import { COMPANY_NAME } from 'utils/config';
import { chatTime, transformMessage } from 'utils/helper';
import * as S from './PrivateChat.styled';

const PrivateChat = ({ username, channel }) => {
  const [subscribed, setSubscribed] = useState(false);
  const router = useRouter();
  const { user } = useContext(UserContext);
  const {
    data: { getUnreadMessagesCount: unreadMessage } = {},
    loading,
    subscribeToMore,
  } = useQuery(GET_UNREAD_MESSAGES, {
    variables: { username, channelUrl: channel.url },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (user && unreadMessage && !subscribed) {
      subscribeToMore({
        document: USER_WENT_ONLINE,
        variables: { tenant: COMPANY_NAME() },
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          const { user: userData } = subscriptionData.data;

          return {
            ...prev,
            user: userData,
          };
        },
      });

      subscribeToMore({
        document: USER_WENT_OFFLINE,
        variables: { tenant: COMPANY_NAME() },
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          const { user: userData } = subscriptionData.data;

          return {
            ...prev,
            user: userData,
          };
        },
      });

      subscribeToMore({
        document: NOTIFICATIONS_SUBSCRIPTION,
        variables: { receiverId: user.id, tenant: COMPANY_NAME() },
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          const { newNotification } = subscriptionData.data;

          if (
            newNotification.type === 'direct' &&
            prev.getUnreadMessagesCount.user.id === newNotification.message.author.id
          ) {
            return {
              ...prev,
              getUnreadMessagesCount: {
                ...prev.getUnreadMessagesCount,
                messages: [...prev.getUnreadMessagesCount.messages, newNotification.message],
              },
            };
          }
          return prev;
        },
      });
      setSubscribed(true);
    }
  }, [unreadMessage, user]);
  if (loading || !unreadMessage) {
    return <div />;
  }

  const onClick = () => {
    router.push(`/[company]/[community]/[channel]`, `/${COMPANY_NAME()}/${channel.url}`);
  };

  return (
    <S.Wrapper key={channel.id} onClick={onClick}>
      <S.Avatar src={unreadMessage.user.image} name={unreadMessage.user.username} width={36} />
      <div className="user-message-box__message">
        <div className="user-message-box__info">
          <span className="user-message-box__name">
            {unreadMessage.user.username}
            <S.Status online={unreadMessage.user.isOnline} />
          </span>
          <span className="user-message-box__date">
            {chatTime(unreadMessage.messages[unreadMessage.messages.length - 1].createdAt)}
          </span>
        </div>
        <div className="user-message-box__text">
          <div className="text">
            <p className="fill">
              {transformMessage(
                unreadMessage.messages[unreadMessage.messages.length - 1].body,
                false
              )}
            </p>
          </div>
          {(unreadMessage.messages.length > 1 || unreadMessage.fromNewUser) && (
            <div className="message-count message-count_blue">
              {unreadMessage.fromNewUser
                ? unreadMessage.messages.length
                : unreadMessage.messages.length - 1}
            </div>
          )}
        </div>
      </div>
    </S.Wrapper>
  );
};

export default PrivateChat;
