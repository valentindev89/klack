import * as S from './Member.styled';

export default ({ member }) => (
  <S.ListItem key={member.id}>
    <S.Avatar src={member.image} name={member.username} />
    <S.Name>{member.username}</S.Name>
    <S.Status online={member.isOnline} />
  </S.ListItem>
);

// export default ({ member }) => (
//   <S.Member>
//     <S.Avatar src={member.image} name={member.username}>
//       <S.Status>
//         <S.OnlineStatus online={member.isOnline} />
//       </S.Status>
//     </S.Avatar>
//     <S.Info>
//       <S.Name>{member.fullname}</S.Name>
//       <S.Username>{member.username}</S.Username>
//     </S.Info>
//   </S.Member>
// );
