import gql from 'graphql-tag';

export const NOTIFICATIONS_SUBSCRIPTION = gql`
  subscription newNotification($receiverId: String!, $tenant: String!) {
    newNotification(receiverId: $receiverId, tenant: $tenant) {
      id
      type
      createdAt
      isRead
      message {
        id
        body
        createdAt
        author {
          id
          username
        }
      }
      receiver {
        id
        username
      }
      sender {
        id
        username
        isOnline
      }
      channel {
        url
        id
      }
      community {
        url
        id
      }
    }
  }
`;

export const GET_UNREAD_NOTIFICATIONS = gql`
  query unreadNotifications {
    unreadNotifications {
      id
      type
      isRead
    }
  }
`;

export const GET_NOTIFICATIONS = gql`
  query notifications {
    notifications {
      id
      type
      createdAt
      isRead
      message {
        id
        body
        createdAt
        author {
          id
          username
        }
      }
      receiver {
        id
        username
      }
      sender {
        id
        username
        isOnline
      }
      channel {
        url
        id
      }
      community {
        url
        id
      }
    }
  }
`;

export const MARK_NOTIFICATIONS_AS_READ = gql`
  mutation markNotificationsAsRead($type: String!) {
    markNotificationsAsRead(type: $type) {
      count
    }
  }
`;
export const MARK_NOTIFICATION_AS_READ = gql`
  mutation markNotificationAsRead($id: String!) {
    markNotificationAsRead(id: $id) {
      count
    }
  }
`;
