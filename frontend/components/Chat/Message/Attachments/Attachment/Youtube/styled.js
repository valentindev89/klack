import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
`;

export const Header = styled.div``;

export const Description = styled.p`
  margin: 5px 0 10px 0;
  display: block;
  width: 100%;
  max-height: 200px;
`;
export const Preview = styled.img`
  display: block;
  width: 360px;
  height: 260px;
  object-fit: cover;
`;
export const PreviewContainer = styled.div`
  display: block;
  width: 360px;
  height: 260px;
  position: relative;
`;

export const StartVideoButton = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100px;
  width: 100px;
  padding: 10px;
  background: #242424;
  opacity: 0.8;
  border-radius: 10px;
  box-shadow: 0 0 5px #060606;
  transition: 0.15s opacity ease-in;

  :after {
    content: '';
    margin-left: 30px;
    display: block;
    width: 0;
    height: 0;
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;

    border-left: 30px solid #e7e7e7;
  }

  :hover {
    opacity: 1;
    box-shadow: 0 1px 8px #030303;
  }
`;

export const VideoContainer = styled.div`
  max-width: 360px;
`;

export const VideoWrapper = styled.div`
  position: relative;
  height: 260px;
  width: 360px;
`;

export const Youtube = styled.iframe.attrs({
  allowFullScreen: 'allowfullscreen',
  frameBorder: 0,
  allow: 'autoplay; encrypted-media;',
  title: 'video',
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
