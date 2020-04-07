import styled from 'styled-components';

export const ChatInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 23px 24px 23px;
  position: relative;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #69a9ff;
  width: 35px;
  height: 35px;
  border-radius: 6px;
  margin-right: 16px;
  padding: 0;
  :hover {
    opacity: 0.75;
  }
`;

export const PlusIcon = styled.svg`
  fill: #fff;
  width: 15px;
  height: 15px;
`;
