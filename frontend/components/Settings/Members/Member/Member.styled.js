import styled from 'styled-components';
import DefaultAvatar from 'components/UI/Avatar';

export const Avatar = styled(DefaultAvatar).attrs({
  alt: 'Avatar',
})`
  width: 36px;
  height: 36px;
  border-radius: 4px;
`;

export const Member = styled.div`
  padding: 17px 23px 17px 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: 0.1s;
  :after {
    content: '';
    display: block;
    height: 1px;
    background: ${props => props.theme.communityBorder};
    position: absolute;
    left: 23px;
    right: 0;
    bottom: 0;
  }
  &:last-child:after {
    display: none;
  }
  :hover {
    background: ${props => props.theme.communityBorderHover};
    :after {
      background: ${props => props.theme.communityBorderHover};
    }
  }
`;
export const User = styled.div`
  display: flex;
`;
export const UserInfo = styled.div`
  max-width: 80%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-left: 15px;
`;
export const Name = styled.h3`
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  vertical-align: middle;

  margin-top: 3px;
  color: ${props => props.theme.chatAuthor};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.15px;
  line-height: 100%;
`;
export const OnlineStatus = styled.div``;
export const Options = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const Username = styled.p`
  color: #131313;
  font-size: 15px;
  font-weight: 400;
  line-height: 165%;
  color: ${props => props.theme.chatText};
`;
export const Role = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.chatAuthor};
  font-size: 15px;
  font-weight: 400;
  margin-left: 20px;
`;
export const RoleColor = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  margin-right: 6px;
  margin-top: -3px;
  background: ${props => props.color};
  ${props => props.owner && `background: #E5C96E;`}
`;
