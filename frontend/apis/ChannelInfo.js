import gql from 'graphql-tag';

export const UPDATE_CHANNEL_INFO = gql`
  mutation updateChannelInfo($channelUrl: String!, $date: String!) {
    updateChannelInfo(channelUrl: $channelUrl, date: $date) {
      id
      fullname
      username
      bio
      email
      social
      image
      isOnline
      owner
      communitiesOwned {
        id
        url
      }
      communitiesFollowed {
        id
        url
        author {
          id
        }
        image
        name
        members {
          id
        }
        notifications {
          id
        }
      }
      role {
        id
        roleSettings
        title
      }
      channelsInfo {
        id
        channel {
          id
          name
          url
        }
        lastUpdateAt
      }
    }
  }
`;
