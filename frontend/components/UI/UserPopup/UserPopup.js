import { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from 'apis/User';
import rightIcon from 'public/icons/right3.svg';

import * as S from './UserPopup.styled';

const UserPopup = ({ username, opened, close, getPosition }) => {
  const { data: { getUser: user } = {}, loading } = useQuery(GET_USER, {
    variables: { username },
  });

  if (loading) {
    return <S.Container>loading...</S.Container>;
  }

  if (!user) return <div />;

  return (
    <S.Overlay onClick={close}>
      <S.Container position={getPosition()}>
        <S.Info>
          <S.Header>
            <S.Avatar src={user.user.image} name={user.user.username} />
            <a
              href={`https://twitter.com/${user.user.username}`}
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.Follow>
                Follow
                <S.RightIcon>
                  <use xlinkHref={`${rightIcon}#icon-right-3`} />
                </S.RightIcon>
              </S.Follow>
            </a>
          </S.Header>
          <S.Body>
            <S.Name>{user.user.fullname}</S.Name>
            <S.Username>{`@${user.user.username}`}</S.Username>
            <S.Text>{user.bio}</S.Text>
          </S.Body>
          <S.Footer>
            <S.Follower>
              <b>{user.followings}</b>
              Following
            </S.Follower>
            <S.Follower>
              <b>{user.followers}</b>
              Followers
            </S.Follower>
          </S.Footer>
        </S.Info>
      </S.Container>
    </S.Overlay>
  );
};

export default UserPopup;
