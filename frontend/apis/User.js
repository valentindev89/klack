import gql from 'graphql-tag';

export const LOGOUT_USER = gql`
  mutation logout {
    logout {
      isOnline
    }
  }
`;

export const GET_USERS = gql`
  mutation users($searchString: String) {
    users(searchString: $searchString) {
      id
      username
      fullname
      image
      isOnline
    }
  }
`;

export const GET_ME = gql`
  query me {
    me {
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

export const GET_USER = gql`
  query getUser($username: String!) {
    getUser(username: $username) {
      followers
      followings
      bio
      user {
        id
        fullname
        username
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
          color
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
  }
`;

export const SEARCH_USERS = gql`
  query users($searchString: String) {
    users(searchString: $searchString) {
      id
      fullname
      username
      bio
      social
      image
      owner
      isOnline
      communitiesOwned {
        id
        url
      }
      communitiesFollowed {
        id
        url
      }
      role {
        id
        roleSettings
        title
        color
      }
    }
  }
`;

export const USER_WENT_ONLINE = gql`
  subscription userWentOnline($tenant: String!) {
    userWentOnline(tenant: $tenant) {
      id
      username
      isOnline
    }
  }
`;

export const USER_WENT_OFFLINE = gql`
  subscription userWentOffline($tenant: String!) {
    userWentOffline(tenant: $tenant) {
      id
      username
      isOnline
    }
  }
`;

export const SIGNUP = gql`
  mutation signup(
    $fullname: String!
    $username: String!
    $email: String!
    $password: String!
    $bio: String
  ) {
    signup(
      fullname: $fullname
      username: $username
      email: $email
      password: $password
      bio: $bio
    ) {
      token
      user {
        id
        username
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

export const LOGIN = gql`
  mutation login($email: String!, $password: String!, $social: String!) {
    login(email: $email, password: $password, social: $social) {
      token
      user {
        id
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

export const SET_CURRENT_CHANNEL = gql`
  mutation setCurrentChannel($channelUrl: String) {
    setCurrentChannel(channelUrl: $channelUrl) {
      id
    }
  }
`;
