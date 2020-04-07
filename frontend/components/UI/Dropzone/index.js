import DragndropLogo from 'public/images/dragndrop.png';
import * as S from './styled';

const DropzoneOverlay = () => (
  <S.Overlay>
    <S.LogoWrapper>
      <S.LogoImage src={DragndropLogo} />
    </S.LogoWrapper>
    <S.Title>Upload files</S.Title>
    <S.Subtitle>Drop your files here</S.Subtitle>
  </S.Overlay>
);

export default DropzoneOverlay;
