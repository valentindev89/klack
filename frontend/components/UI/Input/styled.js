import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-top: 28px;
  position: relative;
`;

export const Label = styled.div`
  font-weight: 700;
  font-size: 15px;
  color: ${props => props.theme.chatAuthor};
`;

export const Input = styled.input`
  width: 100%;
  font-weight: 400;
  font-size: 15px;
  color: ${props => props.theme.chatAuthor};
  padding-bottom: 17px;
  margin-top: 8px;
  border: 0;
  border-bottom: 1px solid ${props => props.theme.communityBorder};
  outline: none;
  :focus {
    border-color: #69a9ff;
  }
`;

export const Tip = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: ${props => props.theme.notificationDate};
  line-height: 20px;
  margin-top: 10px;
`;

export const Error = styled.div`
  font-weight: 500;
  font-size: 13px;
  color: #da3662;
  line-height: 20px;
  margin-top: 10px;
`;

export const UrlMask = styled.span`
  display: inline-block;
  font-weight: 400;
  font-size: 16px;
  color: #1d1c1d;
  line-height: 32px;
  background: #f4f4f4;
  border-radius: 6px;
  padding: 0 15px 0;
  position: absolute;
  right: 0;
  top: 3px;
`;
