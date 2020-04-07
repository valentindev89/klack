import Toggle from 'components/UI/Toggle';
import * as S from './ToggleInput.styled';

const Input = ({ field: { name, value, onChange }, label, tip }) => (
  <S.Container>
    <div>
      <S.Label>{label}</S.Label>
      <S.Tip>{tip}</S.Tip>
    </div>
    <Toggle name={name} value={value} onChange={onChange} />
  </S.Container>
);

export default Input;
