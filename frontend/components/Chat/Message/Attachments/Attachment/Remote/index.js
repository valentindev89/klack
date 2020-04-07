import React from 'react';
import * as S from './styled';
import YoutubeAttachmentBody from '../Youtube';

const RemoteAttachment = ({
  attachment: { title, description, url, siteName, videoLink, preview },
}) => {
  return (
    <S.Container>
      <S.Header>
        <S.SiteName>{siteName}</S.SiteName>
        <S.Title>{title}</S.Title>
      </S.Header>
      {siteName === 'YouTube' && videoLink ? (
        <YoutubeAttachmentBody
          description={description}
          url={url}
          videoLink={videoLink}
          preview={preview}
        />
      ) : (
        <S.Body href={url} rel="noopener noreferrer" target="_blank">
          <S.Description>{description}</S.Description>
          <S.Preview src={preview} />
        </S.Body>
      )}
    </S.Container>
  );
};

export default RemoteAttachment;
