import styled, { keyframes } from 'styled-components';

const jump = keyframes`
  0% {
    transform: translateY(0);
  }
  33% {
    transform: translateY(-5px);
  }
  66% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Container = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: #484848;
  width: 300px;

  position: absolute;
  top: -20px;
`;

export const Circle = styled.span`
  display: inline-block;
  width: 3px;
  height: 3px;
  min-width: 3px;
  min-height: 3px;
  background: #666566;
  border-radius: 50%;
  margin-bottom: 4px;
  animation-name: ${jump};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  margin-left: 5px;
  :nth-of-type(2) {
    animation-delay: 0.1s;
  }
  :nth-of-type(3) {
    animation-delay: 0.2s;
  }
  :nth-of-type(4) {
    animation-delay: 0.3s;
  }
`;
