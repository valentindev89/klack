import gql from 'graphql-tag';
import { MessagesFragment } from './Fragments';

export const GET_ALL_MESSAGES = gql`
  query allMessages($channelUrl: String) {
    messages: allMessages(channelUrl: $channelUrl) {
      ...message
    }
  }
  ${MessagesFragment}
`;

export const GET_LAST_MESSAGES = gql`
  query getLastMessages($channelUrl: String!, $cursorId: ID, $lastVisitDate: String) {
    messages: getLastMessages(
      channelUrl: $channelUrl
      cursorId: $cursorId
      lastVisitDate: $lastVisitDate
    ) {
      ...message
    }
  }
  ${MessagesFragment}
`;

export const GET_PREV_MESSAGES = gql`
  query getPrevMessages($channelUrl: String, $cursorId: ID) {
    messages: getPrevMessages(channelUrl: $channelUrl, cursorId: $cursorId) {
      ...message
    }
  }
  ${MessagesFragment}
`;

export const SEARCH_MESSAGES_QUERY = gql`
  query searchMessages($channelUrl: String, $searchQuery: String) {
    messages: searchMessages(channelUrl: $channelUrl, searchQuery: $searchQuery) {
      ...message
    }
  }
  ${MessagesFragment}
`;

export const GET_NEXT_MESSAGES = gql`
  query getNextMessages($channelUrl: String, $cursorId: ID) {
    messages: getNextMessages(channelUrl: $channelUrl, cursorId: $cursorId) {
      ...message
    }
  }
  ${MessagesFragment}
`;

export const EDIT_MESSAGE = gql`
  mutation editMessage($messageId: String!, $body: String!) {
    editMessage(body: $body, messageId: $messageId) {
      body
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_MESSAGE = gql`
  mutation deleteMessage($messageId: String!) {
    deleteMessage(messageId: $messageId) {
      id
    }
  }
`;

export const MESSAGES_SUBSCRIPTION = gql`
  subscription newMessage($channelUrl: String, $tenant: String) {
    newMessage(channelUrl: $channelUrl, tenant: $tenant) {
      ...message
    }
  }
  ${MessagesFragment}
`;

export const MESSAGE_EDIT_SUBSCRIPTION = gql`
  subscription editMessage($channelUrl: String, $tenant: String) {
    editMessage(channelUrl: $channelUrl, tenant: $tenant) {
      ...message
    }
  }
  ${MessagesFragment}
`;

export const MESSAGE_DELETE_SUBSCRIPTION = gql`
  subscription deleteMessage($channelUrl: String, $tenant: String) {
    deleteMessage(channelUrl: $channelUrl, tenant: $tenant) {
      id
    }
  }
`;

export const NEW_REACTION_SUBSCRIPTION = gql`
  subscription newReaction($channelUrl: String, $tenant: String) {
    newReaction(channelUrl: $channelUrl, tenant: $tenant) {
      id
      name
      createdAt
      updatedAt
      users {
        id
        username
      }
      message {
        id
      }
    }
  }
`;

export const UPDATE_REACTION_SUBSCRIPTION = gql`
  subscription updatedReaction($channelUrl: String, $tenant: String) {
    updatedReaction(channelUrl: $channelUrl, tenant: $tenant) {
      id
      name
      createdAt
      updatedAt
      users {
        id
        username
      }
      message {
        id
      }
    }
  }
`;

export const REMOVE_REACTION_SUBSCRIPTION = gql`
  subscription removedReaction($channelUrl: String, $tenant: String) {
    removedReaction(channelUrl: $channelUrl, tenant: $tenant) {
      id
    }
  }
`;

export const TOGGLE_REACTION = gql`
  mutation toggleReaction($messageId: String!, $name: String!) {
    toggleReaction(messageId: $messageId, name: $name) {
      id
      name
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage(
    $body: String!
    $channelUrl: String!
    $attachments: [String!]
    $urlList: [String!]
    $mentions: [String!]
    $communityUrl: String!
  ) {
    sendMessage(
      body: $body
      channelUrl: $channelUrl
      attachments: $attachments
      urlList: $urlList
      mentions: $mentions
      communityUrl: $communityUrl
    ) {
      id
      body
      createdAt
      author {
        id
        username
      }
      attachments {
        id
        filename
      }
    }
  }
`;

export const SEND_NOTIFICATION = gql`
  mutation sendNotification(
    $receiverName: String
    $messageId: ID!
    $channelUrl: String
    $communityUrl: String
  ) {
    sendNotification(
      receiverName: $receiverName
      messageId: $messageId
      channelUrl: $channelUrl
      communityUrl: $communityUrl
      type: "mention"
    ) {
      id
    }
  }
`;

export const SET_USER_TYPING_STATUS = gql`
  mutation setUserTypingStatus($channelUrl: String, $isTyping: Boolean) {
    setUserTypingStatus(channelUrl: $channelUrl, isTyping: $isTyping) {
      username
      isTyping
    }
  }
`;

export const SEARCH_MESSAGES = gql`
  mutation searchMessages($channelUrl: String, $searchQuery: String) {
    messages: searchMessages(channelUrl: $channelUrl, searchQuery: $searchQuery) {
      ...message
    }
  }
  ${MessagesFragment}
`;

export const REPLY_MESSAGE = gql`
  mutation replyMessage(
    $parentId: String!
    $body: String!
    $attachments: [String!]
    $urlList: [String!]
  ) {
    replyMessage(parentId: $parentId, body: $body, attachments: $attachments, urlList: $urlList) {
      id
      parent {
        id
      }
    }
  }
`;

export const EDIT_REPLY_MESSAGE = gql`
  mutation editReplyMessage($messageId: String!, $body: String!) {
    editReplyMessage(body: $body, messageId: $messageId) {
      body
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_REPLY_MESSAGE = gql`
  mutation deleteReplyMessage($messageId: String!) {
    deleteReplyMessage(messageId: $messageId) {
      id
    }
  }
`;

export const GET_UNREAD_MESSAGES = gql`
  query getUnreadMessagesCount($channelUrl: String, $username: String) {
    getUnreadMessagesCount(channelUrl: $channelUrl, username: $username) {
      messages {
        body
        createdAt
        author {
          username
          image
          isOnline
          fullname
        }
      }
      fromNewUser
      user {
        id
        fullname
        username
        bio
        email
        social
        image
        isOnline
        owner
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
  }
`;
