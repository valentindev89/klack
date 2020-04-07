import styled from 'styled-components';
import notificationsIcon from 'public/icons/@.svg';

const NotificationsIcon = styled.svg.attrs({
  id: 'vs-icon-notifications',
})`
  margin-top: 1px;
  margin-bottom: -2px;
  height: 17px;
  fill: #989ba0;
  cursor: pointer;
  :hover {
    opacity: 0.85;
  }
  ${props =>
    props.active &&
    `
    fill: #69a9ff !important;
  `}
`;

export default ({ onClick, active }) => (
  <NotificationsIcon id="vs-icon-notifications" onClick={onClick} active={active}>
    <use xlinkHref={`${notificationsIcon}#icon-notification`} />
  </NotificationsIcon>
);
