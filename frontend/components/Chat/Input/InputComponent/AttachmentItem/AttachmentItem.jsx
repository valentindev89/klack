import React from 'react';
import * as S from './styled';

const AttachmentItem = ({ url, attachmentNumber, onClick }) => {
  const handleClose = () => {
    onClick(attachmentNumber);
  };
  return (
    <S.Container onClick={handleClose}>
      <S.Attachment src={url} alt="" />
      <S.CloseOverlay className="overlay" />
    </S.Container>
  );
};

export default AttachmentItem;
