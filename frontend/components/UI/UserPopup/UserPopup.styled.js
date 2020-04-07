import styled from 'styled-components';
import DefaultAvatar from 'components/UI/Avatar';
import { ButtonOutline } from 'components/UI/Button';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
`;

export const Container = styled.div`
  position: absolute;
  width: 300px;
  background: ${props => props.theme.popupBG};
  box-shadow: 0px 5px 10px rgba(20, 46, 75, 0.2);
  border-radius: 8px;
  padding: 18px 20px;
  box-sizing: border-box;
  transition: opacity 0.2s ease-in-out;
  display: block;
  z-index: 1;

  ${props => props.position && `left: ${props.position.x - 25}px;`}

  ${props => props.position && props.position.position === 'b' && `top: ${props.position.y}px;`}

  ${props => props.position && props.position.position === 't' && `bottom: ${props.position.y}px;`}
`;

export const Avatar = styled(DefaultAvatar).attrs({
  alt: 'Avatar',
})`
  display: block;
  width: 50px;
  height: 50px;
  background: #c4c4c4;
  background-size: cover;
  border-radius: 6px;
  cursor: pointer;
`;

export const Info = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Body = styled.div``;

export const Footer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;
export const Name = styled.a`
  margin-top: 14px;
  display: block;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  color: ${props => props.theme.chatAuthor};
`;

export const Username = styled.a`
  display: block;
  margin-top: 6px;
  font-size: 13px;
  line-height: 13px;
  color: #989ba0;
`;

export const Text = styled.div`
  margin-top: 10px;
  color: ${props => props.theme.chatText};
  font-size: 14px;
  line-height: 150%;
`;

export const Follower = styled.a`
  font-weight: 400;
  font-size: 15px;
  color: #777;
  b {
    margin-right: 4px;
    color: ${props => props.theme.chatAuthor};
    font-weight: 700;
    font-size: 15px;
  }
`;

export const Follow = styled(ButtonOutline)``;

export const RightIcon = styled.svg`
  height: 13px;
  width: 13px;
  margin-left: 7px;
  fill: ${props => props.theme.chatAuthor};
`;
