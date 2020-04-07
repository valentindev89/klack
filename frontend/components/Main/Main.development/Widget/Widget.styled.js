import styled from 'styled-components';

// eslint-disable-next-line
export const WidgetIframe = styled.iframe`
  width: 960px;
  height: 640px;
  right: 40px;
  bottom: 40px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background: ${props => props.theme.chatBG};
  border: none;
  position: fixed;
  transform: scale(0);
  transform-origin: right bottom 0;
  transition: opacity 0.4s ease-in-out, transform 0.2s ease-in-out;

  box-shadow: 0 8px 50px rgba(7, 5, 47, 0.2);
  border-radius: 16px 16px 10px 10px;

  opacity: 0;
  visibility: hidden;
  z-index: -3;

  ${props =>
    props.active &&
    `
    opacity: 1;
    visibility: visible;
    z-index: 3;
    transform: scale(1);
  `}
`;
