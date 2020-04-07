import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.communityBorder};
`;

export const Label = styled.div`
  width: 100%;
  color: ${props => props.theme.chatAuthor};
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const Colors = styled.div`
  display: flex;
  width: 480px;
  flex-wrap: wrap;
`;

export const Color = styled.div`
  cursor: pointer;
  margin-top: 15px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 5px;
  background: ${props => props.color};
  border: none;
  :hover {
    opacity: 0.85;
  }
`;

export const CheckIcon = styled.svg`
  fill: #fff;
  height: 14px;
  width: 14px;
  transition: 0.3s;
`;
