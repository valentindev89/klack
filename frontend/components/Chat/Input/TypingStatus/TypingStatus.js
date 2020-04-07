import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { useSubscription } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { COMPANY_NAME } from 'utils/config';
import { UserContext } from 'context/UserContext';
import * as S from './TypingStatus.styled';

const USER_TYPING_STATUS = gql`
  subscription userTypingStatus($channelUrl: String, $tenant: String, $username: String) {
    userTypingStatus(channelUrl: $channelUrl, tenant: $tenant, username: $username) {
      username
      isTyping
    }
  }
`;

export default () => {
  const [typingUsers, setTypingUsers] = useState([]);
  const [typingTimeouts, setTypingTimeouts] = useState({});
  const { user } = useContext(UserContext);

  const {
    query: { channel: channelUrl, community: communityUrl },
  } = useRouter();

  const url = `${communityUrl}/${channelUrl}`;

  const startTimeout = username => {
    const timeout = {};

    timeout[username] = setTimeout(() => {
      setTypingUsers(currentTypingUsers =>
        currentTypingUsers.filter(typingUsername => typingUsername !== username)
      );
    }, 3000);

    setTypingTimeouts({
      typingTimeouts,
      ...timeout,
    });
  };

  useSubscription(USER_TYPING_STATUS, {
    variables: {
      channelUrl: url,
      tenant: COMPANY_NAME(),
      username: (user && user.username) || '',
    },
    onSubscriptionData: ({
      subscriptionData: {
        data: { userTypingStatus },
      },
    }) => {
      const userIndex = typingUsers.findIndex(username => userTypingStatus.username === username);

      clearTimeout(typingTimeouts[userTypingStatus.username]);

      if (userTypingStatus.isTyping) {
        if (userIndex === -1) {
          setTypingUsers([...typingUsers, userTypingStatus.username]);
        }

        startTimeout(userTypingStatus.username);
      } else if (userIndex !== -1) {
        setTypingUsers(typingUsers.filter(username => username !== userTypingStatus.username));
      }
    },
  });

  const getStatusString = () => {
    const visibleUsers = typingUsers.slice(0, 2).join(', ');
    const moreUsers = typingUsers.length > 2 ? `and ${typingUsers.length - 2} others` : '';

    return `${visibleUsers} ${moreUsers} is responding`;
  };

  return (
    typingUsers.length > 0 && (
      <S.Container>
        <span style={{ marginRight: 5 }}>{getStatusString()}</span>
        <S.Circle />
        <S.Circle />
        <S.Circle />
      </S.Container>
    )
  );
};
