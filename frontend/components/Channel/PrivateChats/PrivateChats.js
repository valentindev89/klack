import { useEffect, useContext, useState } from 'react';
import { UserContext } from 'context/UserContext';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { useEscapeToClose } from 'hooks';
import { COMPANY_NAME } from 'utils/config';
import { GET_PRIVATE_CHANNELS } from 'apis/Channel';
import { NOTIFICATIONS_SUBSCRIPTION } from 'apis/Notification';
import PrivateChat from './PrivateChat';
import * as S from './styled';

const PrivateChats = () => {
  const [subscribed, setSubscribed] = useState(false);

  const router = useRouter();
  useEscapeToClose(router.back);

  const { data: { privateChannels = [] } = {}, loading, refetch, subscribeToMore } = useQuery(
    GET_PRIVATE_CHANNELS,
    {
      fetchPolicy: 'cache-and-network',
    }
  );

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user && !subscribed) {
      setSubscribed(true);
      subscribeToMore({
        document: NOTIFICATIONS_SUBSCRIPTION,
        variables: { receiverId: user.id, tenant: COMPANY_NAME() },
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          const { newNotification } = subscriptionData.data;

          if (
            newNotification.type === 'direct' &&
            prev.privateChannels.filter(channel => channel.id === newNotification.channel.id)
              .length === 0
          ) {
            return {
              ...prev,
              privateChannels: [newNotification.channel, ...prev.privateChannels],
            };
          }
          return prev;
        },
      });
    }
  }, [user, subscribeToMore]);

  if (loading || !user) {
    return <div />;
  }

  return (
    <S.Wrapper>
      <div className="chat-base-header" onClick={() => refetch()}>
        <h3 className="chat-base-header__title">Private Chats</h3>
      </div>
      <div className="chat-latest-body">
        {privateChannels &&
          privateChannels.map(privateChannel => {
            const channelUsernames = privateChannel.url.replace('direct/', '').split('-');
            const otherUsername =
              channelUsernames.indexOf(user.username) === 0
                ? channelUsernames[1]
                : channelUsernames[0];
            return (
              <PrivateChat
                key={privateChannel.id}
                username={otherUsername}
                channel={privateChannel}
              />
            );
          })}
      </div>
    </S.Wrapper>
  );
};

export default PrivateChats;
