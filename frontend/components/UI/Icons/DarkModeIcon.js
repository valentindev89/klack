import styled from 'styled-components';
import darkModeIcon from 'public/icons/dark-mode.svg';

const DarkModeIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  margin-bottom: -2px;
  fill: none;
  stroke: #989ba0;
`;

export default () => (
  <DarkModeIcon id="dark-mode-icon">
    <use xlinkHref={`${darkModeIcon}#icon-dark-mode`} />
  </DarkModeIcon>
);
