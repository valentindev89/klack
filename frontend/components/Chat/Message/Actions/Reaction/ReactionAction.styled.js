import styled from 'styled-components';

export const Action = styled.div`
  width: 34px;
  height: 30px;
  position: relative;
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

export const ReactionIcon = styled.svg`
  width: 21px;
  height: 21px;
  fill: #525252;
  stroke: none;
  transform: scale(0.8);
`;
