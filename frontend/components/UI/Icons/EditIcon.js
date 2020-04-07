import styled from 'styled-components';
import pencilIcon from 'public/icons/pencil.svg';

const EditIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  fill: #989ba0;
`;

export default () => (
  <EditIcon>
    <use xlinkHref={`${pencilIcon}#icon-pencil`} />
  </EditIcon>
);
