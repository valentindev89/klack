import styled from 'styled-components';
import closeIcon from 'public/icons/close.svg';

const CloseIcon = styled.svg`
  transition: opacity 0.2s ease-in-out;
  height: 13px;
  width: 22px;
  fill: #9fa2a7;
  position: absolute;
  top: 18px;
  right: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.75;
  }
`;

export default ({ onClick, style, id }) => (
  <CloseIcon id={id || ''} onClick={onClick} style={style || {}}>
    <use xlinkHref={`${closeIcon}#icon-close`} />
  </CloseIcon>
);
