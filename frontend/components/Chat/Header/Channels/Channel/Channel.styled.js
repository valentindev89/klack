/* eslint-disable no-nested-ternary, import/prefer-default-export */
import styled from 'styled-components';

export const Channel = styled.li`
  cursor: pointer;
  margin-right: 18px;
  line-height: 17px;
  font-size: 15px;
  display: inline-block;
  font-weight: ${props => (props.active ? 600 : 500)};
  color: ${props =>
    props.active
      ? props.theme.channelActive
      : props.unread
      ? props.theme.channelUnread
      : props.theme.channelUnread};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
  text-transform: lowercase;
  :hover {
    opacity: 0.85;
  }
`;
// color: ${props =>
//   props.active
//     ? props.theme.channelActive
//     : props.unread
//     ? props.theme.channelUnread
//     : 'blue'};
