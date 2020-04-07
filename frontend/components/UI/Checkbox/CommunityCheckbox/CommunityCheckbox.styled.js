import styled from 'styled-components';

export const Checkbox = styled.div`
  margin-left: auto;
`;

export const CheckboxInput = styled.input`
  width: calc(100% - 38px);
  font-weight: 400;
  font-size: 15px;
  line-height: 50px;
  border-radius: 6px;
  border: 1px solid #e0e1e4;
  padding: 0 18px;
  margin: 25px auto 0;
  display: none;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: ${props => props.theme.communityFollowButton};
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  ${props =>
    props.checked &&
    `
      background-color: #69a9ff;
      :hover {
        opacity: 0.85;
      }
  `}
`;

export const CheckIcon = styled.svg`
  width: 15px;
  height: 15px;
  fill: #fff;
  transition: 0.5s;
  opacity: 1;
  display: none;

  ${props =>
    props.show &&
    `
  display: block;
  `}
`;

export const PlusIcon = styled.svg`
  width: 15px;
  height: 15px;
  fill: #fff;
  transition: 0.5s;
  display: none;
  ${props =>
    props.show &&
    `
  display: block;
  `}
`;
