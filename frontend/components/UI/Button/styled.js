import styled from 'styled-components';

export const Button = styled.button.attrs({
  type: props => props.type || 'button',
  name: 'button',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  font-weight: 500;
  font-size: 15px;
  border-radius: 5px;
  padding: 0 20px;
`;

export const ButtonSubtle = styled(Button)`
  border: ${props => props.theme.buttonSubtleBorder};
  color: ${props => props.theme.chatText};
  :hover {
    background: ${props => props.theme.buttonSubtleBG};
  }
  :active {
    background: ${props => props.theme.buttonSubtleBGActive};
  }
`;

export const ButtonPrimary = styled(Button).attrs({
  type: props => props.type || 'button',
  name: 'button',
})`
  color: #fff;
  background-color: #69a9ff;
  :hover {
    opacity: 0.85;
  }
  :active {
    opacity: 0.75;
  }
  ${props =>
    props.disabled &&
    `
    opacity: 0.7 !important;
    background: #5296f1;
    cursor: progress;
  `}
`;

export const ButtonOutline = styled(Button)`
  color: ${props => props.theme.chatAuthor};
  border: 1px solid ${props => props.theme.buttonOutlineBorder};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  :hover {
    background: ${props => props.theme.buttonOutlineBGHover};
  }
  :active {
    background: ${props => props.theme.buttonOutlineBGActive};
  }
`;
