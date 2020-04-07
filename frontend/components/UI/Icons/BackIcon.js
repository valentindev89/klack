import styled from 'styled-components';
import rightIcon from 'public/icons/right.svg';

const BackIcon = styled.svg`
  width: 25px;
  height: 18px;
  fill: #6a696a;
  margin-right: 8px;
  cursor: pointer;
  :hover {
    opacity: 0.85;
  }
`;

export default ({ onClick }) => (
  <BackIcon id="right-icon" onClick={onClick}>
    <use xlinkHref={`${rightIcon}#icon-right`} />
  </BackIcon>
);
