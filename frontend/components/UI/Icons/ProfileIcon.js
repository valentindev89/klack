import styled from 'styled-components';
import moreIcon from 'public/icons/more.svg';

const MoreIcon = styled.svg`
  width: 18px;
  height: 18px;
  cursor: pointer;
  display: block;
  outline: none;
  display: inline-flex;
  margin: 0 2px;
  margin-right: -5px;
  fill: #989ba0;
  :hover {
    opacity: 0.85;
  }
  ${props =>
    props.active &&
    `
    fill: #69a9ff;
  `}
`;

export default ({ onClick, active }) => (
  <MoreIcon id="profile-icon" onClick={onClick} active={active}>
    <use xlinkHref={`${moreIcon}#icon-more`} />
  </MoreIcon>
);
