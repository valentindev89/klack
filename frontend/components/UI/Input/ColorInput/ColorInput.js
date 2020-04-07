import checkIcon from 'public/icons/check.svg';
import * as S from './ColorInput.styled';

const colors = [
  '#19BC9B',
  '#2FCC71',
  '#3398DB',
  '#9B59B6',
  '#EA1E62',
  '#F2C40E',
  '#E67D23',
  '#E74C3C',
  '#95A5A6',
  '#607C8A',
  '#11806A',
  '#1E8B4C',
  '#206694',
  '#70368A',
  '#AD1457',
  '#C37C0C',
  '#A74300',
  '#992D23',
  '#979C9F',
  '#546D7A',
];

const CheckIcon = () => (
  <S.CheckIcon>
    <use xlinkHref={`${checkIcon}#icon-check`} />
  </S.CheckIcon>
);

export default ({ field: { value }, form: { setFieldValue } }) => (
  <S.Container>
    <S.Label>Role color</S.Label>
    <S.Colors>
      {colors.map(color => (
        <S.Color key={color} color={color} onClick={() => setFieldValue('color', color)}>
          {value === color && <CheckIcon />}
        </S.Color>
      ))}
    </S.Colors>
  </S.Container>
);
