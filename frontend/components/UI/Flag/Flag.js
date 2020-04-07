import closeIcon from 'public/icons/close.svg';
import * as S from './Flag.styled';

export default ({ label, action }) => {
  return (
    <>
      <S.Label>{label}</S.Label>
      <S.Actions>
        <S.Action onClick={action.onClick}>{action.label}</S.Action>
      </S.Actions>
    </>
  );
};

export const FlagCloseButton = ({ closeToast }) => (
  <S.CloseIcon onClick={closeToast}>
    <use xlinkHref={`${closeIcon}#icon-close`} />
  </S.CloseIcon>
);
