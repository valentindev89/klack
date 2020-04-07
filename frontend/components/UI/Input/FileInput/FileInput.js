import React, { useState, useRef } from 'react';
import * as S from './styled';

const fileTypes = [
  { name: 'png', type: ['png'] },
  { name: 'jpg', type: ['jpg', 'jpeg'] },
  { name: 'gif', type: ['gif'] },
];

const FileInput = ({
  field,
  onChange,
  form: { touched, errors },
  tip,
  label,
  removeButtonText = 'Remove',
}) => {
  const [imagePreview, setImagePreview] = useState('');
  const [activeType, setActiveType] = useState(-1);
  const inputRef = useRef();

  const handleChange = e => {
    const file = e.target.files[0];

    if (file && file.type.includes('image/')) {
      const previewLink = URL.createObjectURL(file);
      const active = fileTypes.findIndex(({ type }) => type.includes(file.type.slice(6)));

      setActiveType(active);
      setImagePreview(previewLink);
    }

    onChange(e);
    return e;
  };

  const removePreview = () => {
    setImagePreview('');
    setActiveType(-1);

    if (inputRef) {
      inputRef.current.value = '';
    }
  };

  return (
    <S.Container>
      <S.File>
        <S.InputLabel htmlFor="image-upload">
          {imagePreview && <S.Image src={imagePreview} />}
          <S.Input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleChange}
            ref={inputRef}
          />
        </S.InputLabel>
      </S.File>

      <S.FileInfo>
        <S.Label>{label}</S.Label>
        <S.Tip>{tip}</S.Tip>

        <S.FileTypes>
          {fileTypes.map(({ name }, i) => (
            <S.FileType className={`${i === activeType ? 'active' : ''}`} key={name}>
              {name}
            </S.FileType>
          ))}
        </S.FileTypes>

        {imagePreview && (
          <S.RemoveButton onClick={removePreview}>{removeButtonText}</S.RemoveButton>
        )}

        {touched[field.name] && errors[field.name] && <S.Error>{errors[field.name]}</S.Error>}
      </S.FileInfo>
    </S.Container>
  );
};

export default FileInput;
