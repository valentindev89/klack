import CheckboxArrow from 'public/icons/CheckboxArrow.svg';
import * as S from './Toggle.styled';

const Toggle = ({ value, onChange, name }) => (
  <>
    <S.Toggle
      img={CheckboxArrow}
      name={name || ''}
      type="checkbox"
      checked={value}
      onChange={onChange}
      id={name || 'checkboxNotifications'}
    />
    <S.ToggleLabel htmlFor={name || 'checkboxNotifications'} />
  </>
);

export default Toggle;
