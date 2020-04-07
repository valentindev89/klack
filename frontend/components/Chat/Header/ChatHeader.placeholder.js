import ContentLoader from 'react-content-loader';
import { withTheme } from 'styled-components';
import { Container } from './ChatHeader.styled';

const ChatHeaderPlaceholder = ({ theme }) => (
  <Container>
    <ContentLoader
      height={72}
      width={400}
      style={{ width: 400, height: 61 }}
      speed={1}
      backgroundColor={theme.placeholderBG}
      foregroundColor={theme.placeholderFG}
    >
      <rect x="0" y="8" rx="4" ry="4" width="109" height="19" />
      <rect x="0" y="36" rx="4" ry="4" width="219" height="17" />
    </ContentLoader>
  </Container>
);

export default withTheme(ChatHeaderPlaceholder);
