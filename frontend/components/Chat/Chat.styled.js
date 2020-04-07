import styled, { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
// export const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${props => props.theme.chatBG};

  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: stretch;
  position: relative;
  outline: none;
  overflow: hidden;
`;

export const ZoomImage = createGlobalStyle`
.ImageIcon--zoom {
  object-fit: cover;
  width: auto !important;
  max-width: 8%;
}
.AttachmentImage--zoom {
  object-fit: cover;
}
`;
