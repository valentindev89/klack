import { useState, useEffect, useContext } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { UserContext } from 'context/UserContext';
import { COMPANY_NAME } from 'utils/config';
import {
  GET_NOTIFICATIONS,
  NOTIFICATIONS_SUBSCRIPTION,
  MARK_NOTIFICATIONS_AS_READ,
  MARK_NOTIFICATION_AS_READ,
} from 'apis/Notification';

import closeIcon from 'public/icons/close.svg';

import Notification from './Notification/Notification';
import Placeholder from './NotificationsPopup.placeholder';
import * as S from './NotificationsPopup.styled';

// import notificationSound from 'public/sounds/notification.wav';
// const NotificationSound = new Audio(notificationSound);

const Notifications = ({ opened, close, onMarkAsRead }) => {
  const [subscribed, setSubscribed] = useState(false);
  // const [active, setActiveTab] = useState('all');
  const { user } = useContext(UserContext);
  const {
    data: { notifications } = {},
    refetch,
    loading: notificationsLoading,
    subscribeToMore,
  } = useQuery(GET_NOTIFICATIONS, { fetchPolicy: 'cache-and-network' });

  const [markNotificationsAsRead] = useMutation(MARK_NOTIFICATIONS_AS_READ);
  const [markNotificationAsRead] = useMutation(MARK_NOTIFICATION_AS_READ);

  useEffect(() => {
    if (user && !subscribed) {
      setSubscribed(true);
      subscribeToMore({
        document: NOTIFICATIONS_SUBSCRIPTION,
        variables: { receiverId: user.id, tenant: COMPANY_NAME() },
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          const { newNotification } = subscriptionData.data;
          if (newNotification.type === 'direct') return prev;
          if (prev.notifications.filter(e => e.id === newNotification.id).length === 0) {
            return {
              ...prev,
              notifications: [newNotification, ...prev.notifications],
            };
          }
          return prev;
        },
      });
    }
  }, [user]);

  useEffect(() => {
    const listener = document.body.addEventListener('click', event => {
      const modalContainer = event.target.closest('#modal-notifications');
      const notificationContainer = event.target.closest('#vs-icon-notifications');
      if (!modalContainer && !notificationContainer) {
        close();
      }
    });
    return () => document.body.removeEventListener('click', listener);
  }, []);

  const markAllAsRead = async () => {
    await markNotificationsAsRead({ variables: { type: 'mention' } });

    await onMarkAsRead();
  };

  const markOneAsRead = async data => {
    await markNotificationAsRead(data);
    await onMarkAsRead();
  };

  if (!notifications) {
    return <Placeholder />;
  }

  return (
    <S.Container opened={opened} id="modal-notifications">
      <S.Header>
        <S.Heading>
          <S.Title>Recent mentions</S.Title>
          {/* notifications.length > 0 && (
            <S.Count>{notifications.length}</S.Count>
          ) */}
        </S.Heading>
        <div>
          <S.MarkAsRead onClick={markAllAsRead}>Mark all read</S.MarkAsRead>
          <S.CloseIcon onClick={close}>
            <use xlinkHref={`${closeIcon}#icon-close`} />
          </S.CloseIcon>
        </div>
      </S.Header>

      {/*
        <S.Nav>
          <div>
            <p
              onClick={() => setActiveTab('all')}
              className={`tab ${active === 'all' ? 'active' : ''}`}
            >
              All servers
            </p>
            <p
              onClick={() => setActiveTab('this')}
              className={`tab ${active === 'this' ? 'active' : ''}`}
            >
              This server
            </p>
          </div>
          <div className="display">
            Display:<span>{` `}everithing</span>
          </div>
        </S.Nav>
        */}

      <S.NotificationsWrapper>
        {notifications.length > 0 ? (
          notifications.map(notification => (
            <Notification
              key={notification.id}
              notification={notification}
              closePopup={close}
              onClick={markOneAsRead}
            />
          ))
        ) : (
          <div style={{ opacity: 0.2, paddingLeft: 9 }}>No notifications</div>
        )}
      </S.NotificationsWrapper>
    </S.Container>
  );
};

export default Notifications;
