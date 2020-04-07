import styled from 'styled-components';

export const SearchPanel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 71px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;

  background: #69a9ff;
  z-index: 1;

  opacity: 0;
  width: 0%;

  ${props =>
    props.show &&
    `
    opacity: 1;
    width: 100%;
  `}
`;
export const SearchInput = styled.input.attrs({
  type: 'text',
})`
  color: #f2f7ff;
  font-size: 15px;
  background: none;
  box-shadow: none;
  border: none;
  width: calc(100% - 63px);
  padding-right: 20px;
  margin-left: 20px;
  ::placeholder {
    color: #f2f7ff;
  }
`;
export const CloseWrapper = styled.button.attrs({
  type: 'button',
})`
  padding: 0;
  margin-right: 24px;
  border: none;
  background: none;
  outline: none;
  box-shadow: none;
`;
export const CloseIcon = styled.svg`
  fill: #fff;
  width: 14px;
  height: 14px;
`;
