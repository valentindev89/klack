import { useEffect, useContext } from 'react';
import Router from 'next/router';
import { UserContext } from 'context/UserContext';
import { COMPANY_NAME } from 'utils/config';
import { SettingsIcon, UsersIcon, RolesIcon, DarkModeIcon } from 'components/UI/Icons';
import Toggle from 'components/UI/Toggle/Toggle';
import useDarkMode from 'use-dark-mode';

import * as S from './ProfilePopup.styled';

const ModalMore = ({ opened, close }) => {
  const { user, logout } = useContext(UserContext);
  const { value: isDarkMode, toggle } = useDarkMode(false);

  useEffect(() => {
    const listener = document.body.addEventListener('click', event => {
      const modalContainer = event.target.closest('#modal-more');
      const profileIconContainer = event.target.closest('#profile-icon');
      if (!modalContainer && !profileIconContainer) {
        close();
      }
    });
    return () => document.body.removeEventListener('click', listener);
  }, []);

  const onLogout = () => {
    logout();
    close();
  };

  return (
    <S.Container opened={opened} id="modal-more">
      {user && (
        <S.Header>
          <S.Avatar src={user.image} name={user.username} />
          <S.Info>
            <S.Fullname>{user.fullname}</S.Fullname>
            <S.Username>{`@${user.username}`}</S.Username>
          </S.Info>
        </S.Header>
      )}
      <S.Content style={!user ? { border: 'none' } : {}}>
        {user && (
          <S.MenuItem
            onClick={() => {
              Router.push('/[company]/settings/members', `/${COMPANY_NAME()}/settings/members`, {
                shallow: true,
              });
              close();
            }}
          >
            <S.UsersIcon>
              <UsersIcon />
            </S.UsersIcon>
            <span>Members</span>
          </S.MenuItem>
        )}
        {user && (
          <S.MenuItem
            onClick={() => {
              Router.push('/[company]/settings/roles', `/${COMPANY_NAME()}/settings/roles`, {
                shallow: true,
              });
              close();
            }}
          >
            <S.RolesIcon>
              <RolesIcon />
            </S.RolesIcon>
            <span>Roles</span>
          </S.MenuItem>
        )}
        {user && (
          <S.MenuItem
            onClick={() => {
              Router.push('/[company]/settings/profile', `/${COMPANY_NAME()}/settings/profile`, {
                shallow: true,
              });
              close();
            }}
          >
            <SettingsIcon />
            <span>Settings</span>
          </S.MenuItem>
        )}
        <S.MenuItem
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <DarkModeIcon />
            <span>Dark mode</span>
          </div>
          <Toggle onChange={toggle} value={isDarkMode} />
        </S.MenuItem>
      </S.Content>
      {user && (
        <S.Footer onClick={() => onLogout()}>
          <span>Log out</span>
        </S.Footer>
      )}
    </S.Container>
  );
};

export default ModalMore;
