import ContentLoader from 'react-content-loader';
import { withTheme } from 'styled-components';

const ChannelsPlaceholder = () => <div />;
// const ChannelsPlaceholder = ({ theme }) => (
//   <ContentLoader
//     height={16}
//     width={325}
//     speed={1}
//     backgroundColor={theme.placeholderBG}
//     foregroundColor={theme.placeholderFG}
//     style={{ marginBottom: '-3px' }}
//   >
//     <rect x="0" y="0" rx="4" ry="4" width="200" height="16" />
//   </ContentLoader>
// );

export default withTheme(ChannelsPlaceholder);
