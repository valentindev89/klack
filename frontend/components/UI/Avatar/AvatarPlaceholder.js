import ContentLoader from 'react-content-loader';
import { withTheme } from 'styled-components';

export default withTheme(({ theme }) => (
  <ContentLoader
    height={36}
    width={36}
    style={{ width: 36, height: 36 }}
    speed={1}
    backgroundColor={theme.placeholderBG}
    foregroundColor={theme.placeholderFG}
  >
    <rect x="0" y="0" rx="6" ry="6" width="36" height="36" />
  </ContentLoader>
));
