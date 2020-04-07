import * as S from './Checkbox.styled';

export default ({ name, checked }) => {
  return <S.Checkbox type="checkbox" name={name} checked={checked} />;
};
