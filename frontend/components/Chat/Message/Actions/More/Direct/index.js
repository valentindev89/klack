import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UserContext } from 'context';
import { useMutation } from '@apollo/react-hooks';

import { COMPANY_NAME } from 'utils/config';
import { CREATE_CHANNEL } from 'apis/Channel';

import { MoreMenuItem } from '../More.styled';

export default ({ messageAuthor }) => {
  const { user: me } = useContext(UserContext);
  const [createChannel] = useMutation(CREATE_CHANNEL);

  const {
    query: { community: communityUrl },
    push,
  } = useRouter();

  const onDirect = async () => {
    if (me && me.username !== messageAuthor.username && communityUrl !== 'direct') {
      let channelUrl = '';
      const result = me.username.localeCompare(messageAuthor.username);
      if (result === 1) {
        channelUrl = `direct/${me.username}-${messageAuthor.username}-`;
      } else {
        channelUrl = `direct/${messageAuthor.username}-${me.username}-`;
      }

      const url = `${channelUrl}`;
      await createChannel({
        variables: {
          communityUrl: 'direct',
          url,
          name: '',
          description: '',
        },
        errorPolicy: 'all',
      });

      push(`/[company]/[community]/[channel]`, `/${COMPANY_NAME()}/${url}`, {
        shallow: true,
      });
    }
  };

  return (
    me.username !== messageAuthor.username && (
      <MoreMenuItem onClick={onDirect}>Direct chat</MoreMenuItem>
    )
  );
};
