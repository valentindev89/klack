import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UserContext } from 'context/UserContext';
import { useMutation } from '@apollo/react-hooks';

import { COMPANY_NAME } from 'utils/config';
import { FOLLOW_COMMUNITY, UNFOLLOW_COMMUNITY } from 'apis/Community';

import Checkbox from 'components/UI/Checkbox/CommunityCheckbox';
import * as S from './Community.styled';

export default ({ community }) => {
  const router = useRouter();
  const { user, getMe } = useContext(UserContext);
  const [followCommunity] = useMutation(FOLLOW_COMMUNITY);
  const [unfollowCommunity] = useMutation(UNFOLLOW_COMMUNITY);

  const isFollowing = user ? community.members.map(c => c.id).indexOf(user.id) > -1 : true;

  const onFollow = async url => {
    if (isFollowing) {
      await unfollowCommunity({ variables: { url } });
    } else {
      await followCommunity({ variables: { url } });
    }
    getMe();
  };

  const onCommunityClick = e => {
    const checkboxClick = e.target.closest('.checkbox');

    if (!checkboxClick) {
      router.push(
        `/[company]/[community]/[channel]`,
        `/${COMPANY_NAME()}/${community.url}/general`,
        { shallow: true }
      );
    }
  };

  return (
    <S.Community onClick={onCommunityClick}>
      <S.Avatar src={community.image} />
      <S.Info>
        <S.Name>{community.name}</S.Name>
        <S.Description>{community.description}</S.Description>
      </S.Info>
      {user && (
        <Checkbox
          id={community.id}
          checked={isFollowing}
          onClick={() => (user ? onFollow(community.url) : {})}
        />
      )}
    </S.Community>
  );
};
