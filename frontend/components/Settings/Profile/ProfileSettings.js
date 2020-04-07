import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UserContext } from 'context/UserContext';
import { COMPANY_NAME } from 'utils/config';
import { Input } from 'components/UI/Input';
import * as S from './ProfileSettings.styled';

const ProfileSettings = () => {
  const { user, loading: userLoading } = useContext(UserContext);
  const router = useRouter();

  if (userLoading) {
    return <div />;
  }

  if (!user) {
    router.push('/[company]/login', `/${COMPANY_NAME()}/login`);
  }

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.Heading>Settings</S.Heading>
          <S.Actions />
        </S.Header>
        <S.Body>
          <S.AvatarBlock>
            <S.Avatar src={user.image} />
          </S.AvatarBlock>
          <Input label="Full name" type="text" value={user.fullname} />
          <Input label="Your username" type="text" value={user.username} />
        </S.Body>
      </S.Content>
    </S.Container>
  );
};

export default ProfileSettings;
