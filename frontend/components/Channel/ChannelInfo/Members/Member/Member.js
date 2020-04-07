import * as S from './Member.styled';

export default ({ member }) => (
  <S.ListItem key={member.id}>
    <S.Avatar src={member.image} name={member.username} />
    <S.Name>{member.username}</S.Name>
    <S.Status online={member.isOnline} />
  </S.ListItem>
);
