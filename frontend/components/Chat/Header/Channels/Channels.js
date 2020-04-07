import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

import { COMPANY_NAME } from 'utils/config';
import { GET_CHANNELS, NEW_CHANNEL_MESSAGE_SUBSCRIPTION } from 'apis/Channel';

import Channel from './Channel/Channel';
import Placeholder from './Channels.placeholder';
import * as S from './Channels.styled';

const Channels = () => {
  const {
    query: { community: communityUrl },
  } = useRouter();
  const { data: { channels = [] } = {}, loading, subscribeToMore } = useQuery(GET_CHANNELS, {
    variables: { communityUrl },
  });

  useEffect(() => {
    subscribeToMore({
      document: NEW_CHANNEL_MESSAGE_SUBSCRIPTION,
      variables: { communityUrl, tenant: COMPANY_NAME() },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const { channelNewMessage } = subscriptionData.data;
        const index = prev.channels.findIndex(({ id }) => id === channelNewMessage.id);
        const channelsList = [...prev.channels];
        if (index === -1) {
          channelsList.push(channelNewMessage);
        } else {
          channelsList[index] = channelNewMessage;
        }
        return {
          ...prev,
          channels: channelsList,
        };
      },
    });
  }, []);

  if (loading) {
    return <Placeholder />;
  }

  return (
    <S.Channels>
      {channels.map((channel, index) => (
        <Channel channel={channel} key={channel.id} index={index}>
          {`#${channel.name}`}
        </Channel>
      ))}
    </S.Channels>
  );
};

export default Channels;
