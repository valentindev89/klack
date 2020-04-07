import ContentLoader from 'react-content-loader';
import { withTheme } from 'styled-components';
import { PlaceholderContainer } from './Navbar.styled';

const NavbarPlaceholder = ({ theme }) => (
  <PlaceholderContainer>
    <ContentLoader
      width={936}
      height={35}
      speed={2}
      backgroundColor={theme.placeholderTabsBG}
      foregroundColor={theme.placeholderTabsFG}
    >
      <rect x="6" y="8" rx="5" ry="5" width="19" height="19" />
      <rect x="35" y="8" rx="5" ry="5" width="19" height="19" />
      <rect x="65" y="0" rx="6" ry="6" width="135" height="39" />
    </ContentLoader>
  </PlaceholderContainer>
);

// const NavbarPlaceholder = () => (
//   <PlaceholderContainer>
//     <ContentLoader
//       width={960}
//       height={35}
//       speed={2}
//       backgroundColor="#ffffff"
//       foregroundColor="#f8fafc"
//     >
//       <rect x="7" y="7" rx="5" ry="5" width="19" height="19" />
//       <rect x="38" y="7" rx="5" ry="5" width="19" height="19" />
//       <rect x="69" y="7" rx="5" ry="5" width="19" height="19" />
//       <rect x="100" y="0" rx="6" ry="6" width="135" height="39" />
//     </ContentLoader>
//   </PlaceholderContainer>
// );

export default withTheme(NavbarPlaceholder);
