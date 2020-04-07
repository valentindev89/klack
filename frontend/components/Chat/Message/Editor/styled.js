import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

import { ButtonSubtle } from 'components/UI/Button';

export const Container = styled.form`
  margin-top: 4px;
  margin-right: 8px;
`;

export const EditInput = styled(TextareaAutosize)`
  font-weight: 400;
  font-size: 15px;
  overflow: hidden;
  color: #131313;
  line-height: 22px;
  resize: none;
  min-height: 18px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #d4d6da;
  padding: 9px 9px 7px;
  box-sizing: border-box;

  width: 100%;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 4px 0 8px;
`;

export const CancelButton = styled(ButtonSubtle)`
  background: #fff;
  margin-right: 8px;
`;
