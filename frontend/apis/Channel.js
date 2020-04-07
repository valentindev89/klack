import gql from 'graphql-tag';

export const GET_CHANNEL_NOTIFICATIONS = gql`
  query channelNotifications($channelUrl: String!) {
    channelNotifications(channelUrl: $channelUrl) {
      id
    }
  }
`;

export const MARK_CHANNEL_NOTIFICATIONS_AS_READ = gql`
  mutation markChannelNotificationsAsRead($channelUrl: String!) {
    markChannelNotificationsAsRead(channelUrl: $channelUrl) {
      id
    }
  }
`;

export const GET_CHANNELS = gql`
  query channels($communityUrl: String!) {
    channels(communityUrl: $communityUrl) {
      id
      name
      url
      community {
        members {
          username
        }
      }
    }
  }
`;

export const GET_CHANNEL = gql`
  query channel($url: String) {
    channel(url: $url) {
      id
      name
      url
      description
      community {
        members {
          username
        }
      }
    }
  }
`;

export const CREATE_CHANNEL = gql`
  mutation createChannel(
    $name: String!
    $description: String
    $url: String!
    $isPrivate: Boolean
    $communityUrl: String!
  ) {
    createChannel(
      name: $name
      description: $description
      url: $url
      isPrivate: $isPrivate
      communityUrl: $communityUrl
    ) {
      id
      name
      url
    }
  }
`;

export const EDIT_CHANNEL = gql`
  mutation editChannel($channelId: String!, $name: String!, $description: String) {
    editChannel(channelId: $channelId, name: $name, description: $description) {
      id
      name
      description
      url
    }
  }
`;

export const NEW_CHANNEL_MESSAGE_SUBSCRIPTION = gql`
  subscription channelNewMessage($communityUrl: String, $tenant: String) {
    channelNewMessage(communityUrl: $communityUrl, tenant: $tenant) {
      id
      name
      url
    }
  }
`;

export const GET_PRIVATE_CHANNELS = gql`
  query privateChannels {
    privateChannels {
      id
      url
    }
  }
`;
