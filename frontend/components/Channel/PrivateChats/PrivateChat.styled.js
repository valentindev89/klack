import styled from 'styled-components';
import DefaultAvatar from 'components/UI/Avatar';

export const Wrapper = styled.div`
  position: relative;
  margin-top: 0 !important;
  padding: 17px 20px;
  margin-bottom: 0;
  display: flex;
  cursor: pointer;

  :hover {
    background: ${props => props.theme.communityBorderHover};
    :after {
      background: ${props => props.theme.communityBorderHover};
    }
  }

  .user-message-box__message {
    width: 100%;
    margin-left: 10px;
  }

  .user-message-box__info {
    display: flex;
    justify-content: space-between;
  }

  .user-message-box__text {
    width: 100%;
    max-width: none;
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.chatAuthor};
    line-height: 165%;
  }

  .user-message-box__name {
    color: ${props => props.theme.chatAuthor};
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.15px;
  }

  .user-message-box__date {
    font-size: 12px;
    font-weight: 400;
    color: ${props => props.theme.chatAuthor};
    margin-left: 1px;
    display: inline-block;
  }

  .message-count_blue {
    background-color: #69a9ff;
    color: #fff;
    margin-top: 5px;
  }

  .message-count {
    width: 23px;
    height: 16px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
  }

  :after {
    content: '';
    height: 1px;
    background-color: #e2e2e2;
    position: absolute;
    left: 75px;
    right: 0;
    display: block;
    bottom: 0px;
  }
`;

export const Avatar = styled(DefaultAvatar).attrs({
  alt: 'Avatar',
})`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  margin-right: 10px;
  ${props =>
    props.width &&
    `
    width: ${props.width}px;
    height: ${props.width}px;
    `}
`;

export const Status = styled.i`
  display: inline-block;
  width: 6px;
  height: 6px;
  border: 2px solid #616061;
  border-radius: 50%;
  margin-left: 10px;
  box-sizing: content-box;
  ${props =>
    props.online &&
    `
    width: 10px;
    height: 10px;
    background: #007a5a;
    border: none;
  `}
`;
