import gql from 'graphql-tag';

export const CREATE_ROLE = gql`
  mutation createRole($title: String, $roleSettings: String, $color: String) {
    createRole(title: $title, roleSettings: $roleSettings, color: $color) {
      id
      title
      roleSettings
      color
    }
  }
`;

export const UPDATE_ROLE = gql`
  mutation updateRole($id: String, $title: String, $roleSettings: String, $color: String) {
    updateRole(id: $id, title: $title, roleSettings: $roleSettings, color: $color) {
      id
      title
      roleSettings
      color
    }
  }
`;

export const DELETE_ROLE = gql`
  mutation deleteRole($id: String!) {
    deleteRole(id: $id) {
      id
      roleSettings
      title
      color
    }
  }
`;

export const GET_ROLE = gql`
  query roles {
    roles {
      id
      title
      roleSettings
      color
    }
  }
`;

export const ATTACH_ROLE_TO_USER = gql`
  mutation attachRoleToUser($userId: String!, $roleId: String!) {
    attachRoleToUser(userId: $userId, roleId: $roleId) {
      id
      username
      social
      image
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

export const DEATTACH_ROLE_TO_USER = gql`
  mutation deattachRoleToUser($userId: String!, $roleId: String!) {
    deattachRoleToUser(userId: $userId, roleId: $roleId) {
      id
      username
      social
      image
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
