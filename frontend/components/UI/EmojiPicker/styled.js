import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  padding: 15px 0;
  margin: -10px 0;
  ${props => props.position && `right: ${props.position.x - 75}px;`}

  ${props => props.position && props.position.position === 'b' && `top: ${props.position.y}px;`}

  ${props => props.position && props.position.position === 't' && `bottom: ${props.position.y}px;`}
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
`;
