import { useState } from 'react';
import { UserIcon } from 'components/UI/Icons';
import Members from 'components/Channel/ChannelInfo/Members/Members';
import * as S from './Members.styled';

export default ({ membersCount }) => {
  const [showMembers, setShowMembers] = useState(false);

  return (
    <>
      <S.Members onClick={() => setShowMembers(!showMembers)}>
        <S.UserIcon>
          <UserIcon />
        </S.UserIcon>
        <S.MembersCount>{membersCount}</S.MembersCount>
      </S.Members>
      <Members show={showMembers} onClose={() => setShowMembers(false)} />
    </>
  );
};
