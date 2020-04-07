import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 23px;
  padding-right: 18px; // More icon
  height: 73px;
  max-height: 73px;
  min-height: 73px;
  box-sizing: border-box;
  background: ${props => props.theme.background};
  border-bottom: 1px solid ${props => props.theme.chatHeaderBorder};
  z-index: 1;
  position: relative;
`;

export const Info = styled.div``;

export const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;

  color: ${props => props.theme.chatTopicText};
`;

export const ChatActions = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  position: relative;
`;

export const Status = styled.i`
  display: inline-block;
  width: 6px;
  height: 6px;
  border: 2px solid #616061;
  border-radius: 50%;
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

export const UserName = styled.h1`
  color: ${props => props.theme.channelActive};
  font-size: 15px;
  font-weight: 700;
`;

export const PrivateChannelInfo = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  flex-flow: column;
  color: ${props => props.theme.chatTopicText};
`;

export const UserStatus = styled.div`
  display: flex;
  margin-top: 8px;
  span {
    margin-left: 4px;
  }
`;
