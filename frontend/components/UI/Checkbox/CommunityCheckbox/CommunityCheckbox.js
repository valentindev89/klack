import checkIcon from 'public/icons/check.svg';
import plusIcon from 'public/icons/plus.svg';

import * as S from './CommunityCheckbox.styled';

export default ({ id, checked, onClick }) => (
  <S.Checkbox className="checkbox">
    <S.CheckboxInput type="checkbox" id={`checkbox-${id}`} checked={checked} readOnly />
    <S.CheckboxLabel checked={checked} htmlFor={`checkbox-${id}`} label="Follow" onClick={onClick}>
      <S.PlusIcon show={!checked}>
        <use xlinkHref={`${plusIcon}#icon-plus`} />
      </S.PlusIcon>
      <S.CheckIcon show={checked}>
        <use xlinkHref={`${checkIcon}#icon-check`} />
      </S.CheckIcon>
    </S.CheckboxLabel>
  </S.Checkbox>
);
