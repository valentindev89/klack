import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER, USER_WENT_ONLINE, USER_WENT_OFFLINE } from 'apis/User';
import ProgressBar from 'components/UI/ProgressBar';
import { COMPANY_NAME } from 'utils/config';
import Search from './Search/Search';
import * as S from './ChatHeader.styled';

export default ({ username }) => {
  const [subscribed, setSubscribed] = useState(false);
  const { data: { getUser: user } = {}, loading, subscribeToMore } = useQuery(GET_USER, {
    variables: { username },
  });

  useEffect(() => {
    if (user && !subscribed) {
      subscribeToMore({
        document: USER_WENT_ONLINE,
        variables: { tenant: COMPANY_NAME() },
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          const { user: userData } = subscriptionData.data;

          return {
            ...prev,
            user: userData,
          };
        },
      });

      subscribeToMore({
        document: USER_WENT_OFFLINE,
        variables: { tenant: COMPANY_NAME() },
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          const { user: userData } = subscriptionData.data;

          return {
            ...prev,
            user: userData,
          };
        },
      });
      setSubscribed(true);
    }
  }, [user]);

  if (loading || !user) {
    return <div />;
  }

  return (
    <S.Container>
      <>
        <S.Info>
          <S.PrivateChannelInfo>
            <S.UserName>{user.user.username}</S.UserName>
            <S.UserStatus>
              <S.Status online={user.user.isOnline} />
              <span>{user.user.isOnline ? 'Online' : 'Offline'}</span>
            </S.UserStatus>
          </S.PrivateChannelInfo>
        </S.Info>
        <S.ChatActions>
          <Search />
        </S.ChatActions>
      </>
      <ProgressBar />
    </S.Container>
  );
};
