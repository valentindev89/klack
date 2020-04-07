import * as S from './styled';

const UnreadLabel = ({ unreadMessagesNumber, onScroll, onClose }) => (
  <S.Container>
    <S.ScrollButton onClick={onScroll} />
    <S.TextBox>{`${unreadMessagesNumber} messages`}</S.TextBox>
    <S.CloseButton onClick={onClose}>
      <S.CloseButtonContent className="close" />
    </S.CloseButton>
  </S.Container>
);

export default UnreadLabel;
