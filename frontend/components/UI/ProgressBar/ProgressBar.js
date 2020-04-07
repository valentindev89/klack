import React, { useContext } from 'react';

import { UploadManagerContext } from 'context/UploadManager';
import * as S from './ProgressBar.styled';

const ProgressBar = () => {
  const {
    uploadProgress: { step, label, maxSteps },
  } = useContext(UploadManagerContext);

  return label ? (
    <S.Wrapper>
      <S.Container>
        <S.Filled style={{ width: `${(100 * step) / maxSteps}%` }} />
        <S.Label>{label}</S.Label>
      </S.Container>
    </S.Wrapper>
  ) : null;
};

export default ProgressBar;
