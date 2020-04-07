import styled from 'styled-components';

// &.unreaded {
//   background: #e7e7e7;
// }
export const MessageContainer = styled.div`
  position: relative;
  font-weight: 400;
  font-size: 15px;
  transition: 0.1s background;

  ${props => props.editing && `background: #f8f8f8;`}
  background: ${props => (props.show ? props.theme.notificationBGHover : 'transparent')};
  .Message__link {
    color: #0066cc;
  }
  ${props =>
    props.isFirstMessage &&
    `
    margin-bottom: -1px;
  `}
`;

export const Body = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: ${props => props.theme.chatText};
  line-height: 150%;
  max-width: 700px;
  ${props =>
    !props.child &&
    `
    margin-top: 1px;
    margin-bottom: -2px;
  `}
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 250px;
  max-width: 300px;
  border-radius: 6px;
  margin: 10px 0;
  object-fit: cover;
  object-position: center;
  display: block;
`;

export const Attachments = styled.div`
  width: 100%;
  text-align: left;
`;
