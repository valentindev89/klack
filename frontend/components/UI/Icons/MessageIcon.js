import styled from 'styled-components';
import messageIcon from 'public/icons/messages.svg';

const MessageIcon = styled.svg`
  cursor: pointer;
  top: 1px;
  height: 18px;
  width: 18px;
  position: relative;
  fill: none;
  stroke: ${props => (props.active ? '#F55152' : '#989BA0')};
  :hover {
    opacity: 0.85;
  }
`;

export default ({ onClick, active }) => (
  <MessageIcon id="icon-message" onClick={onClick} active={active}>
    <use xlinkHref={`${messageIcon}#icon-message`} />
  </MessageIcon>
);
