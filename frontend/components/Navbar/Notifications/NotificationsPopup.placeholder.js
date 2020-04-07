import ContentLoader from 'react-content-loader';
import { withTheme } from 'styled-components';
import { Container } from './NotificationsPopup.styled';

const NotificationsPopupPlaceholder = ({ theme }) => (
  <Container>
    Loading...
    <ContentLoader
      height={40}
      width={40}
      style={{ width: 400, height: 61 }}
      speed={1}
      backgroundColor={theme.placeholderBG}
      foregroundColor={theme.placeholderFG}
    >
      <rect x="10" y="10" rx="4" ry="4" width="20" height="20" />
    </ContentLoader>
  </Container>
);

export default withTheme(NotificationsPopupPlaceholder);
