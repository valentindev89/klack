import React, { useState } from 'react';
import * as S from './styled';

const YoutubeAttachmentBody = ({ description, url, siteName, videoLink, preview }) => {
  const [isActive, setActive] = useState(false);

  const launchVideo = () => {
    setActive(true);
  };

  return (
    <S.Container>
      <S.Description>{description}</S.Description>
      {isActive ? (
        <S.VideoContainer>
          <S.VideoWrapper>
            <S.Youtube src={`${videoLink}?autoplay=1`} />
          </S.VideoWrapper>
        </S.VideoContainer>
      ) : (
        <S.PreviewContainer>
          <S.Preview src={preview} />
          <S.StartVideoButton onClick={launchVideo} />
        </S.PreviewContainer>
      )}
    </S.Container>
  );
};

export default YoutubeAttachmentBody;
