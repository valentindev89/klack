import styled from 'styled-components';
import { MessageContainer } from '../Message.styled';

export const Actions = styled.div`
  position: absolute;
  right: 60px;
  top: -15px;
  z-index: 1;
  display: flex;
`;

export const Action = styled.button`
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
  position: relative;
  :hover {
    background: ${props => props.theme.messageActionBGHover};
  }
`;

export const TooltipWrapper = styled.div`
  padding: 5px;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 10px;
  display: none;
  ${Action}:hover & {
    display: block;
  }
`;
