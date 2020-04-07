import { withTheme } from 'styled-components';
import ContentLoader from 'react-content-loader';
import * as S from './ChatBody.styled';

// const ChatBodyPlaceholder = () => <div />;
const ChatBodyPlaceholder = () => (
  <S.Container style={{ paddingLeft: 23, paddingTop: 16 }}>
    <MessagePlaceholder />
    <MessagePlaceholder />
    <MessagePlaceholder />
    <MessagePlaceholder />
    <MessagePlaceholder />
    <MessagePlaceholder />
    <MessagePlaceholder />
  </S.Container>
);

const MessagePlaceholder = withTheme(({ theme }) => (
  <ContentLoader
    height={53}
    width={700}
    style={{ width: 700, height: 53 }}
    speed={1}
    backgroundColor={theme.placeholderBG}
    foregroundColor={theme.placeholderFG}
  >
    <rect x="0" y="7" rx="6" ry="6" width="36" height="36" />
    <rect x="50" y="7" rx="4" ry="4" width="169" height="14" />
    <rect x="50" y="25" rx="4" ry="4" width="319" height="14" />
  </ContentLoader>
));

export const ChatBodyEmpty = () => (
  <S.ChatEmptyContainer>
    <S.ChatEmptyImage />
    <S.ChatEmptyText>No messages...</S.ChatEmptyText>
  </S.ChatEmptyContainer>
);

export default ChatBodyPlaceholder;
