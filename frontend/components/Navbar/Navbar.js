import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useKeyboardShortcut } from 'hooks';

import { UserContext } from 'context/UserContext';
import { COMPANY_NAME } from 'utils/config';
import {
  GET_UNREAD_NOTIFICATIONS,
  NOTIFICATIONS_SUBSCRIPTION,
  MARK_NOTIFICATIONS_AS_READ,
} from 'apis/Notification';

import { NotificationsIcon, ProfileIcon, CloseIcon, MessageIcon } from 'components/UI/Icons';
import Badge from 'components/UI/Badge';
import Tabs from './Tabs/Tabs';
import NotificationsPopup from './Notifications';
import MorePopup from './More';

import NavbarPlaceholder from './Navbar.placeholder';
import * as S from './Navbar.styled';

const Navbar = () => {
  const [subscribed, setSubscribed] = useState(false);

  const { user, loading: userLoading } = useContext(UserContext);

  const [showNotifications, setShowNotifications] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const router = useRouter();

  const [markNotificationsAsRead] = useMutation(MARK_NOTIFICATIONS_AS_READ);

  const [
    getUnreadNotification,
    {
      data: { unreadNotifications = [] } = {},
      // loading: unreadNotificationsLoading,
      subscribeToMore,
      refetch,
    },
  ] = useLazyQuery(GET_UNREAD_NOTIFICATIONS, { fetchPolicy: 'cache-and-network' });

  useKeyboardShortcut({
    B: () =>
      router.push(`/[company]/communities`, `/${COMPANY_NAME()}/communities`, {
        shallow: true,
      }),
  });

  useEffect(() => {
    getUnreadNotification();
  }, []);
  useEffect(() => {
    if (user && subscribeToMore && !subscribed) {
      setSubscribed(true);
      subscribeToMore({
        document: NOTIFICATIONS_SUBSCRIPTION,
        variables: { receiverId: user.id, tenant: COMPANY_NAME() },
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          const { newNotification } = subscriptionData.data;
          // NotificationSound.play();
          if (prev.unreadNotifications.filter(e => e.id === newNotification.id).length === 0) {
            return {
              ...prev,
              unreadNotifications: [newNotification, ...prev.unreadNotifications],
            };
          }
          return prev;
        },
      });
    }
  }, [user, subscribeToMore]);

  if (userLoading) {
    return <NavbarPlaceholder />;
  }

  const checkUnread = async () => {
    await refetch();
  };

  const onDirectChat = async () => {
    await markNotificationsAsRead({ variables: { type: 'direct' } });
    await refetch();
    router.push(`/[company]/direct`, `/${COMPANY_NAME()}/direct`, {
      shallow: true,
    });
  };

  const unreadNotificationsCount = unreadNotifications.filter(e => e.type === 'mention').length;
  const unreadDirectCount = unreadNotifications.filter(e => e.type === 'direct').length;

  return (
    <>
      <S.NavbarContainer>
        <S.IconsWrapper>
          <S.Icons>
            <S.IconBox>
              <MessageIcon onClick={() => onDirectChat()} active={unreadDirectCount > 0} />
            </S.IconBox>
            <S.IconBox second>
              {unreadNotificationsCount > 0 ? (
                <Badge
                  id="vs-icon-notifications"
                  count={unreadNotificationsCount}
                  onClick={() => setShowNotifications(!showNotifications)}
                />
              ) : (
                <NotificationsIcon
                  id="vs-icon-notifications"
                  active={showNotifications}
                  onClick={() => setShowNotifications(!showNotifications)}
                />
              )}
            </S.IconBox>
            <S.IconBox last>
              <ProfileIcon onClick={() => setShowMore(!showMore)} active={showMore} />
            </S.IconBox>
          </S.Icons>
        </S.IconsWrapper>

        <Tabs />

        <S.AddCommunity
          onClick={() =>
            router.push(`/[company]/communities`, `/${COMPANY_NAME()}/communities`, {
              shallow: true,
            })
          }
        />
        <CloseIcon
          id="vs-close-widget"
          onClick={() => window.parent.postMessage({ message: 'close-widget' }, '*')}
        />
      </S.NavbarContainer>
      {showMore && <MorePopup opened={showMore} close={() => setShowMore(false)} />}
      <NotificationsPopup
        opened={showNotifications}
        close={() => setShowNotifications(false)}
        onMarkAsRead={checkUnread}
      />
    </>
  );
};

export default Navbar;
