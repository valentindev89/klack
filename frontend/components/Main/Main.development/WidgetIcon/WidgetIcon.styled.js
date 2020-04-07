import styled from 'styled-components';
import widgetIcon from 'public/widget-icon.svg';

export const Container = styled.button`
  position: fixed;
  bottom: 20px;
  right: 45px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 555;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
  ${props => !props.show && `opacity: 0;`}
`;
export const WidgetIcon = styled.img.attrs({
  alt: 'Open klack',
  src: widgetIcon,
})``;
