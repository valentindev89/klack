import docPreview from 'public/icons/document-preview.png';
import AttachmentImage from '../Image';
import * as S from './styled';

const AttachmentItem = ({ url, mimetype, filesize, filename }) => {
  const fileSizeFormat = bytes => {
    const threshold = 1000;

    const i = Math.floor(Math.log(bytes) / Math.log(threshold));
    return `${(bytes / threshold ** i).toFixed(2) * 1} ${['B', 'kB', 'MB'][i]}`;
  };

  const isImage = mimetype.includes('image');
  return (
    <S.Container>
      {isImage ? <AttachmentImage url={url} /> : <S.FileIcon src={docPreview} />}
      <S.Description>
        <S.Name>{filename}</S.Name>
        <S.Bottom>
          <S.Size>{fileSizeFormat(filesize)}</S.Size>
          <S.Link href={url} download={filename}>
            Download
          </S.Link>
        </S.Bottom>
      </S.Description>
    </S.Container>
  );
};

export default AttachmentItem;
