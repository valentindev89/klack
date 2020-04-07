import { useCallback } from 'react';
import { ButtonPrimary, ButtonSubtle } from 'components/UI/Button';
import { Container, EditInput, Buttons } from './styled';

const MessageEditor = ({ initialValue, onSubmit, onCancel }) => {
  const submitHandle = useCallback(
    e => {
      e.preventDefault();

      const inputValue = e.target.input.value;
      onSubmit(inputValue);
    },
    [onSubmit]
  );

  return (
    <Container onSubmit={submitHandle}>
      <EditInput defaultValue={initialValue} name="input" onClick={e => e.stopPropagation()} />
      <Buttons>
        <ButtonSubtle type="reset" onClick={onCancel} style={{ marginRight: 8 }}>
          Cancel
        </ButtonSubtle>
        <ButtonPrimary type="submit" onClick={e => e.stopPropagation()}>
          Save changes
        </ButtonPrimary>
      </Buttons>
    </Container>
  );
};

export default MessageEditor;
