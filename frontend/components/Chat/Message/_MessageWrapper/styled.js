import styled from 'styled-components';
import DefaultAvatar from 'components/UI/Avatar';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 8px 13px 4px 23px;
  box-sizing: border-box;
  position: relative;
  cursor: inherit;
  word-wrap: break-word;
  opacity: ${props => (props.isDeleted ? '0.4' : '1')};
  ${props =>
    props.child &&
    `
    padding: 1px 13px 1px 23px;
    margin: 0px;

    br {
      content: "";
      width: 100%;
      height: 2px;
      display: block;
    }
  `}
`;

export const Content = styled.div`
  width: calc(100% - 50px);
  ${props => (props.child ? ` margin-left: 45px; ` : ` margin-left: 9px; `)}
`;

export const User = styled.p``;

export const NameLink = styled.a`
  font-weight: 600;
  font-size: 15px;
  color: ${props => props.theme.chatAuthor};
  cursor: pointer;
`;

export const Name = styled.span`
  font-weight: 600;
  font-size: 15px;
  letter-spacing: -0.15px;
  color: ${props => props.theme.chatAuthor};
  cursor: pointer;
`;

export const Time = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: ${props => props.theme.notificationDate};
  margin-left: 7px;

  ${Container}:hover & {
    opacity: 1;
  }
  ${props =>
    props.child &&
    `
    position: absolute;
    left: 0px;
    font-weight: 400;
    font-size: 10px;
    line-height: 150%;
    margin-left: 24px;
    opacity: 0;

    width: 36px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

  `}
`;

export const EditInput = styled.textarea`
  font-weight: 400;
  font-size: 15px;
  color: #131313;
  line-height: 150%;
  width: 100%;
  resize: none;
`;

export const Avatar = styled(DefaultAvatar).attrs({
  alt: 'Avatar',
})`
  width: 36px;
  height: 36px;
  border-radius: 3px;
`;
