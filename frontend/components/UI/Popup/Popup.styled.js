import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  position: absolute;
  top: 30px;
  right: 5px;
  width: 250px;
  background: ${props => props.theme.popupBG};
  box-shadow: 0px 5px 10px rgba(20, 46, 75, 0.2);
  border-radius: 8px;
  z-index: 1888;
`;
export const List = styled.ul`
  list-style: none;
  padding: 8px 0;
`;
export const Item = styled.li`
  padding: 10px 21px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.chatText};
  font-size: 15px;
  cursor: pointer;
  user-select: none;
  position: relative;
  :hover {
    background: ${props => props.theme.tabBGHover};
  }
`;

export const Separator = styled.hr`
  border-top: none;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${props => props.theme.popupBorder};
`;

export const Icon = styled.svg`
  height: 16px;
  width: 16px;
  fill: #989ba0;
  margin-right: 13px;
`;
