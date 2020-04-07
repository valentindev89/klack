import ContentLoader from 'react-content-loader';
import { withTheme } from 'styled-components';

const MembersPlaceholder = () => <div />;
// const MembersPlaceholder = ({ theme }) => (
//   <ContentLoader
//     height={157}
//     width={325}
//     speed={1}
//     backgroundColor={theme.placeholderBG}
//     foregroundColor={theme.placeholderFG}
//   >
//     <rect x="16" y="30" rx="4" ry="4" width="109" height="19" />
//     <rect x="16" y="74" rx="4" ry="4" width="293" height="21" />
//     <rect x="16" y="105" rx="4" ry="4" width="293" height="21" />
//     <rect x="16" y="136" rx="4" ry="4" width="293" height="21" />
//     <rect x="16" y="167" rx="4" ry="4" width="293" height="21" />
//     <rect x="16" y="198" rx="4" ry="4" width="293" height="21" />
//   </ContentLoader>
// );

export default withTheme(MembersPlaceholder);
