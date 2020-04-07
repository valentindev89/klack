import styled from 'styled-components';

export const Reaction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.reactionBG};
  ${props => props.isLogged && 'cursor: pointer;'}
  width: 45px;
  height: 24px;
  margin-top: 1px;
  margin-right: 5px;
  margin-bottom: 4px;
  box-sizing: border-box;
  border-radius: 5px;
  line-height: initial;
  position: relative;
  padding-top: 3px;
  :hover {
    background: ${props => props.theme.reactionBGHover};
    box-shadow: 0 3px 5px rgba(18, 100, 163, 0.2);
    border: 1px solid #1264a3;
  }
`;

export const Count = styled.span`
  font-size: 11px;
  font-weight: 400;
  line-height: 100%;
  margin-left: 4px;
  color: ${props => props.theme.chatText};
  user-select: none;
`;

export const Tooltip = styled.div`
  background: #000;
  padding: 10px 15px;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  max-width: 180px;
  border-radius: 5px;
  overflow: hidden;

  &:after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background: inherit;
    position: absolute;
    left: calc(50% - 5px);
    bottom: 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
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
  ${Reaction}:hover & {
    display: block;
  }
`;

export const UsersList = styled.ul`
  text-align: center;
  display: block;
  height: 100%;
  width: 100%;
  ${({ maxNumberOfLines }) => `max-height: ${maxNumberOfLines * 18}px;`}

  li {
    width: 100%;
    list-style: none;
    white-space: nowrap;

    :last-child {
      width: calc(100% - 8px);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;

export const ReactonName = styled.span`
  display: block;
  opacity: 0.5;
  text-align: center;
  width: 100%;
  margin-top: 5px;
  white-space: nowrap;
`;
