import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { COMPANY_NAME } from 'utils/config';
// import { useMutation } from '@apollo/react-hooks';

import { GET_CHANNEL_NOTIFICATIONS, MARK_CHANNEL_NOTIFICATIONS_AS_READ } from 'apis/Channel';
import { ChannelPlaceholder } from './Channel.placeholder';
import * as S from './Channel.styled';

const Channel = ({ channel }) => {
  const router = useRouter();
  const { community: communityUrl, channel: channelUrl } = router.query;
  const [markChannelNotificationsAsRead] = useMutation(MARK_CHANNEL_NOTIFICATIONS_AS_READ);

  const {
    data: { channelNotifications: unreadNotifications = [] } = {},
    loading: notificationsLoading,
    // subscribeToMore,
  } = useQuery(GET_CHANNEL_NOTIFICATIONS, {
    variables: { channelUrl: channel.url },
  });

  const unreadCount = unreadNotifications.length;
  const isActiveChannel = channel.url === `${communityUrl}/${channelUrl}`;

  useEffect(() => {
    if (unreadNotifications && unreadCount > 0 && isActiveChannel) {
      markChannelNotificationsAsRead({
        variables: { channelUrl: channel.url },
      });
    }
  }, [channelUrl, unreadNotifications]);

  if (notificationsLoading) {
    return <ChannelPlaceholder />;
  }

  return (
    <S.ListItem
      key={channel.id}
      unread
      active={isActiveChannel}
      onClick={() =>
        router.push(`[company]/[community]/[channel]`, `/${COMPANY_NAME()}/${channel.url}`, {
          shallow: true,
        })
      }
    >
      {channel.name}
      {unreadCount > 0 && <S.UnreadCount>{unreadCount}</S.UnreadCount>}
    </S.ListItem>
  );
};

export default Channel;
