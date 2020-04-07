import styled from 'styled-components';

export const Action = styled.button.attrs({
  ariaLabel: 'More',
  type: 'button',
  name: 'button',
})`
  width: 34px;
  height: 30px;
  background: ${props => props.theme.messageActionBG};
  border: ${props => props.theme.messageActionBorder};
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  :hover {
    background: ${props => props.theme.messageActionBGHover};
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
`;

export const MoreMenu = styled.ul`
  position: absolute;
  z-index: 224;
  width: 214px;
  background: ${props => props.theme.popupBG};
  box-shadow: 0px 5px 10px rgba(20, 46, 75, 0.2);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  display: block;

  ${props => props.position && `right: ${props.position.x - 25}px;`}

  ${props => props.position.position === 'b' && `top: ${props.position.y}px;`}

  ${props => props.position.position === 't' && `bottom: ${props.position.y}px;`}

`;

export const MoreMenuItem = styled.li`
  display: block;
  font-size: 15px;
  color: ${props => props.theme.chatText};
  padding: 10px 12px;
  box-sizing: border-box;
  :hover {
    background: ${props => props.theme.messageActionBGHover};
  }
`;

export const MoreIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: #525252;
  stroke: none;
  transform: rotate(90deg);
`;
