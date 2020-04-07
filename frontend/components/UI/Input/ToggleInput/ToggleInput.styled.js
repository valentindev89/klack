import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.communityBorder};
  padding: 16px 0;
`;

export const Label = styled.div`
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 4px;
  line-height: 18px;
  color: ${props => props.theme.chatAuthor};
`;

export const Tip = styled.p`
  color: ${props => props.theme.chatText};
  line-height: 18px;
`;
