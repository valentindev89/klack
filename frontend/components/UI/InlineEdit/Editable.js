// https://blog.logrocket.com/the-complete-guide-to-building-inline-editable-ui-in-react/
import React, { useState, useEffect } from 'react';

const Editable = ({
  text,
  type,
  placeholder,
  onSave,
  children,
  childRef,
  canEdit = true,
  ...props
}) => {
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    if (childRef && childRef.current && isEditing === true) {
      childRef.current.focus();
    }
  }, [isEditing, childRef]);

  const handleKeyDown = (event, type) => {
    const { key } = event;
    const keys = ['Escape', 'Tab'];
    const enterKey = 'Enter';
    const allKeys = [...keys, enterKey];
    if (type !== 'textarea' && allKeys.indexOf(key) > -1) {
      onSave();
      setEditing(false);
    }
  };

  return (
    <section {...props}>
      {isEditing ? (
        <div
          onBlur={() => {
            onSave();
            setEditing(false);
          }}
          onKeyDown={e => handleKeyDown(e, type)}
        >
          {children}
        </div>
      ) : (
        <div onClick={() => canEdit && setEditing(true)}>
          <span>{text || placeholder || 'Editable content'}</span>
        </div>
      )}
    </section>
  );
};

export default Editable;
