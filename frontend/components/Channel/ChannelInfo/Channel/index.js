import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/react-hooks';

import { GET_CHANNELS } from 'apis/Channel';
import Channel from './Channel';
import ChannelsPlaceholder from './Channel.placeholder';
import * as S from './Channel.styled';

const ChannelsComponent = () => {
  const {
    query: { community: communityUrl },
  } = useRouter();
  const [getChannels, { data: { channels = [] } = {}, loading }] = useLazyQuery(GET_CHANNELS);

  useEffect(() => {
    getChannels({ variables: { communityUrl } });
  }, [communityUrl]);

  if (loading || channels.length === 0) {
    return <ChannelsPlaceholder />;
  }

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>Channels</S.HeaderTitle>
      </S.Header>
      <S.List>
        {channels.map(channel => (
          <Channel channel={channel} key={channel.id} />
        ))}
      </S.List>
    </S.Container>
  );
};

export default ChannelsComponent;
