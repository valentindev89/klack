// import { useContext } from 'react';
// import { UserContext } from 'context/UserContext';
import { useRouter } from 'next/router';
import { COMPANY_NAME } from 'utils/config';
import { useKeyboardShortcut } from 'hooks';

import * as S from './Channel.styled';

const channelsShortcutMap = {
  0: 'Q',
  1: 'W',
  2: 'E',
  3: 'R',
};

export default ({ channel, index, children }) => {
  // const { user } = useContext(UserContext);

  const {
    query: { community: communityUrl, channel: channelUrl },
    push,
  } = useRouter();

  const onChangeChannel = () => {
    if (channel.url !== `${communityUrl}/${channelUrl}`) {
      push('/[company]/[community]/[channel]', `/${COMPANY_NAME()}/${channel.url}`, {
        shallow: true,
      });
    }
  };

  useKeyboardShortcut({
    [channelsShortcutMap[index]]: onChangeChannel,
  });

  return (
    <S.Channel
      onClick={() => onChangeChannel()}
      active={channel.url === `${communityUrl}/${channelUrl}`}
    >
      {children}
    </S.Channel>
  );
};
