import { useContext, useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import InlineEdit from 'components/UI/InlineEdit/Parent';

import { EDIT_CHANNEL } from 'apis/Channel';

import { UserContext } from 'context/UserContext';
import { canManageChannel } from 'utils/permission';

import * as S from './Topic.styled';

const Topic = ({ onChangeTopic, channel }) => {
  const { user } = useContext(UserContext);
  const [topic, setTopic] = useState(channel.description || '');
  const [editChannel] = useMutation(EDIT_CHANNEL);
  const canSetTopic = user && canManageChannel(user);

  useEffect(() => {
    setTopic(channel.description);
  }, [channel]);

  const changeDescription = async () => {
    try {
      await editChannel({
        variables: {
          channelId: channel.id,
          communityUrl: channel.communityUrl,
          url: channel.url,
          name: channel.name,
          description: topic,
        },
        errorPolicy: 'all',
      });
      onChangeTopic();
    } catch (error) {
      // alert(error);
    }
  };

  return (
    <S.ChatTopic>
      <InlineEdit
        value={topic}
        onChange={e => setTopic(e.target.value)}
        placeholder="Set a topic"
        onSave={changeDescription}
        canEdit={canSetTopic}
      />
    </S.ChatTopic>
  );
};

export default Topic;
