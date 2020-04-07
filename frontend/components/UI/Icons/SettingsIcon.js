import styled from 'styled-components';
import settingsIcon from 'public/icons/settings.svg';

const SettingsIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  fill: #989ba0;
`;

export default () => (
  <SettingsIcon id="settings-icon">
    <use xlinkHref={`${settingsIcon}#icon-settings`} />
  </SettingsIcon>
);
