import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Product Sans Regular';
    src: url('/fonts/ProductSans-Regular.woff');
  }
  @font-face {
    font-family: 'Product Sans Bold';
    src: url('/fonts/ProductSans-Bold.woff');
  }
  @font-face {
    font-family: 'Product Sans Black';
    src: url('/fonts/ProductSans-Black.woff');
  }

  @font-face {
    font-family: 'Helvetica Neue';
    font-weight: 300;
    src: url('/fonts/HelveticaNeueCyr-Light.woff');
  }
  @font-face {
    font-family: 'Helvetica Neue';
    font-weight: 400;
    src: url('/fonts/HelveticaNeueCyr-Roman.woff');
  }
  @font-face {
    font-family: 'Helvetica Neue';
    font-weight: 500;
    src: url('/fonts/HelveticaNeueCyr-Medium.woff');
  }
  @font-face {
    font-family: 'Helvetica Neue';
    font-weight: 600;
    src: url('/fonts/HelveticaNeueCyr-Bold.woff');
  }

  @font-face {
    font-family: Avenirnext;
    font-weight: 400;
    src: url("/fonts/AvenirNextLTPro-Regular.otf") format("opentype");
  }
  @font-face {
    font-family: Avenirnext;
    font-weight: 700;
    src: url("/fonts/AvenirNextLTPro-Bold.otf") format("opentype");
  }
`;
