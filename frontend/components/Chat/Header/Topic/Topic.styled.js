/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ChatTopic = styled.div`
  display: flex;
  color: ${props => props.theme.chatTopicText};
  font-size: 14px;
  font-weight: 400;
  padding-left: 9px;
  margin-left: 6px;
  border-left: 1px solid ${props => props.theme.chatTopicBorder};
  line-height: 17px;
`;
