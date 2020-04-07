import * as S from './styled';

const Badge = ({ count, onClick, id }) => (
  <S.Badge id={id} onClick={onClick}>
    {count}
  </S.Badge>
);

export default Badge;
