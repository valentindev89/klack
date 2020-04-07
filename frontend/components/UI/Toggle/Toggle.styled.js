import styled from 'styled-components';

export const ToggleLabel = styled.label`
  width: 54px;
  border-radius: 27px;
  background: ${props => props.theme.checkboxBG};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    margin: 5px;
    background: ${props => props.theme.checkboxCircleBG};
    transition: 0.5s;

    align-items: center;
    justify-content: center;
    padding: 0 5px;
    box-sizing: border-box;
  }
`;

export const Toggle = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 27px;
  width: 42px;
  &:checked + ${ToggleLabel} {
    background: #0095ff;
    &::after {
      content: url(${({ img }) => img});
      display: flex;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin-left: 29px;
      transition: 0.4s;
      background-color: #fff;
      position: relative;
    }
  }
`;
