import styled from 'styled-components';
import CloseIcon from 'public/icons/close-white.svg';

export const Attachment = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  object-position: center;
`;

export const CloseOverlay = styled.div`
  position: absolute;
  display: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(110, 93, 217, 0.7);
  background-image: url(${CloseIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 25px;
`;

export const Container = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  margin: 5px;
  border-radius: 6px;
  overflow: hidden;
  display: inline-block;

  :hover {
    .overlay {
      display: inline-block;
    }
  }
`;
