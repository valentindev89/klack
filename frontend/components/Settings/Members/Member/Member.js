import { useState, useEffect } from 'react';
import { MoreIcon } from 'components/UI/Icons';
import MorePopup from './MorePopup';
import * as S from './Member.styled';

export default ({ user, roles, toggleUserRole }) => (
  <S.Member key={user.id}>
    <S.User>
      <S.Avatar src={user.image} name={user.username} />
      <S.UserInfo>
        <S.Name>{user.fullname}</S.Name>
        <S.OnlineStatus online={user.isOnline} />
        <S.Username>{`@${user.username}`}</S.Username>
      </S.UserInfo>
    </S.User>
    <S.Options>
      <Roles user={user} />
      <More user={user} roles={roles} toggleUserRole={toggleUserRole} />
    </S.Options>
  </S.Member>
);

const Roles = ({ user }) => {
  const isOwner = user.owner === '1';

  return isOwner ? (
    <S.Role>
      <S.RoleColor owner />
      Owner
    </S.Role>
  ) : (
    user.role.sort().map(role => (
      <S.Role key={role.id}>
        <S.RoleColor color={role.color} />
        {role.title}
      </S.Role>
    ))
  );
};

const More = ({ user, roles, toggleUserRole }) => {
  const [showPopup, setShowPopup] = useState(false);
  const isOwner = user.owner === '1';

  useEffect(() => {
    const listener = document.body.addEventListener('click', event => {
      const popupContainer = event.target.closest('.vs-popup');
      const moreIconContainer = event.target.closest('.vs-more-icon');
      if (!popupContainer && !moreIconContainer) {
        setShowPopup(false);
      }
    });
    return () => document.body.removeEventListener('click', listener);
  }, []);

  return (
    !isOwner && (
      <>
        <MoreIcon
          active={showPopup}
          onClick={() => setShowPopup(!showPopup)}
          style={{ marginLeft: 24, transform: 'rotate(-90deg)' }}
        />
        <MorePopup
          show={showPopup}
          close={() => setShowPopup(false)}
          user={user}
          roles={roles}
          toggleUserRole={toggleUserRole}
        />
      </>
    )
  );
};
