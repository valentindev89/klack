import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import * as S from './AttachmentImage.styled';

const AttachmentImage = ({ url }) => (
  <Zoom zoomMargin={60}>
    <S.Image src={url} className="AttachmentImage" alt="img" />
  </Zoom>
);

export default AttachmentImage;
