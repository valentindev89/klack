/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Tooltip = styled.div`
  background: #000;
  padding: 10px 15px;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  max-width: 180px;
  border-radius: 5px;
  overflow: hidden;

  &:after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background: inherit;
    position: absolute;
    left: calc(50% - 5px);
    bottom: 0;
    transform: rotate(45deg);
  }
`;
