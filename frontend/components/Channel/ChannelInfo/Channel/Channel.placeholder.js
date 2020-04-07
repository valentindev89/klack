import ContentLoader from 'react-content-loader';

const ChannelsPlaceholder = () => (
  <ContentLoader
    height={157}
    width={325}
    speed={1}
    backgroundColor="#eeeeee"
    foregroundColor="#f0f0f0"
  >
    <rect x="16" y="30" rx="4" ry="4" width="109" height="19" />
    <rect x="16" y="74" rx="4" ry="4" width="293" height="21" />
    <rect x="16" y="105" rx="4" ry="4" width="293" height="21" />
    <rect x="16" y="136" rx="4" ry="4" width="293" height="21" />
  </ContentLoader>
);

export const ChannelPlaceholder = () => (
  <ContentLoader
    height={31}
    width={325}
    speed={1}
    backgroundColor="#eeeeee"
    foregroundColor="#f0f0f0"
  >
    <rect x="7.5" y="5" rx="4" ry="4" width="310" height="21.5" />
  </ContentLoader>
);

export default ChannelsPlaceholder;
