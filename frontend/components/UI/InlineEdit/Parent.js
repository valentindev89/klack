// https://blog.logrocket.com/the-complete-guide-to-building-inline-editable-ui-in-react/
import React, { useRef } from 'react';
import styled from 'styled-components';
import Editable from './Editable';

export const Input = styled.input`
  border: none;
  outline: red !important;
  font-family: Helvetica Neue;
  color: ${props => props.theme.chatText};
  height: 13px;
  font-size: 14px;
  font-weight: 400;
  padding: 0;
  width: 500px;
`;

function App({ value, onChange, placeholder, onSave, canEdit }) {
  const inputRef = useRef();

  return (
    <Editable
      text={value}
      onSave={onSave}
      placeholder="Write a task name"
      childRef={inputRef}
      canEdit={canEdit}
      type="input"
    >
      <Input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Editable>
  );
}

export default App;
