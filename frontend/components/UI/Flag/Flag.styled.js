import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 21px;
  right: 22px;
  z-index: 1;
  width: 230px;
  height: 55px;
  padding: 18px 14px;
  box-sizing: border-box;
  background: #2f3136;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  border-left: 6px solid #69a9ff;
  display: none;
  align-items: center;
  justify-content: space-between;
  ${props => props.show && `display: flex; `}
  ${props => props.type === 'notice' && `border-color: #69a9ff;`}
  ${props => props.type === 'danger' && `border-color: #ff4b4b;`}
`;

export const Label = styled.p`
  font-size: 12px;
  color: #ffffff;
  line-height: 15px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const Action = styled.button`
  font-size: 12px;
  text-transform: uppercase;
  color: #69a9ff;
  margin-right: 15px;

  background: none;
  border: none;
  box-shadow: none;
  padding: 0;

  :hover {
    opacity: 0.85;
  }
`;

export const CloseIcon = styled.svg`
  width: 13px;
  height: 19px;
  fill: #989ba0;
  cursor: pointer;
`;
