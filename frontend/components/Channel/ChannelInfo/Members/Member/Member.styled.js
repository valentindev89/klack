import styled from 'styled-components';
import DefaultAvatar from 'components/UI/Avatar';

export const ListItem = styled.li`
  position: relative;
  max-width: calc(100% - 16px);
  height: 31px;
  display: flex;
  align-items: center;
  line-height: 32px;
  white-space: nowrap;
  padding: 0 8px;
  border-radius: 5px;
  cursor: pointer;
  color: #616061;
  user-select: none;
  margin-bottom: 2px;
  :hover {
    background: ${props => props.theme.notificationBGHover};
  }
`;

export const Avatar = styled(DefaultAvatar).attrs({
  alt: 'Avatar',
})`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  margin-right: 10px;
`;

export const Name = styled.span`
  max-width: calc(100% - 75px);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: -2px;
  color: ${props => props.theme.chatAuthor};
`;

export const Status = styled.i`
  display: inline-block;
  width: 6px;
  height: 6px;
  border: 2px solid #616061;
  border-radius: 50%;
  margin-left: 10px;
  box-sizing: content-box;
  ${ListItem}:hover & {
    border-color: white;
  }
  ${props =>
    props.online &&
    `
    width: 10px;
    height: 10px;
    background: #007a5a;
    border: none;
    ${ListItem}:hover & {
      background: #34c19c;
    }
  `}
`;

export const Member = styled.div``;
export const OnlineStatus = styled.div``;
export const Info = styled.div``;
export const Username = styled.div``;
