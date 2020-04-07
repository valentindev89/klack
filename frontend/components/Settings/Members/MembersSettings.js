import { useEffect, useState } from 'react';
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import { SEARCH_USERS } from 'apis/User';
import { GET_ROLE, ATTACH_ROLE_TO_USER, DEATTACH_ROLE_TO_USER } from 'apis/Role';
import { SearchIcon } from 'components/UI/Icons';
import Member from './Member/Member';
import * as S from './MembersSettings.styled';

const Members = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filterString, setFilterString] = useState('');
  const [searchActive, setSearchActive] = useState(false);

  const [searchUsers, { data: { users = [] } = {}, loading: usersLoading }] = useLazyQuery(
    SEARCH_USERS
  );

  const [getRoles, { data: { roles = [] } = {}, loading: rolesLoading }] = useLazyQuery(GET_ROLE);

  useEffect(() => {
    searchUsers({ variables: { searchString: '' } });
    getRoles();
  }, []);

  const [attachRoleToUser] = useMutation(ATTACH_ROLE_TO_USER, {
    // update(cache, { data: { attachRoleToUser: user } }) {
    //   const { users } = cache.readQuery({ query: SEARCH_USERS });
    //   cache.writeQuery({
    //     query: SEARCH_USERS,
    //     data: { users: users.concat([user]) },
    //   });
    // },
  });

  const [deattachRoleToUser] = useMutation(DEATTACH_ROLE_TO_USER, {
    // update(cache, { data: { deattachRoleToUser: user } }) {
    //   const { users } = cache.readQuery({ query: SEARCH_USERS });
    //   cache.writeQuery({
    //     query: SEARCH_USERS,
    //     data: { users: users.concat([user]) },
    //   });
    // },
  });

  useEffect(() => {
    if (filterString === '') {
      setFilteredUsers(users);
      return;
    }

    setFilteredUsers(
      users.filter(
        user => user.username.includes(filterString) || user.fullname.includes(filterString)
      )
    );
  }, [users, filterString]);

  /*
  Event Functions
  */
  const toggleUserRole = async (user, role) => {
    const existing = user.role.filter(userRole => userRole.id === role.id).length === 1;

    if (existing) {
      await deattachRoleToUser({
        variables: { userId: user.id, roleId: role.id },
        errorPolicy: 'all',
      });
    } else {
      await attachRoleToUser({
        variables: { userId: user.id, roleId: role.id },
        errorPolicy: 'all',
      });
    }
  };

  if (usersLoading || rolesLoading) {
    return <div />;
  }

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.Heading>Manage members</S.Heading>
          <S.SearchInput
            type="text"
            placeholder="Search"
            value={filterString}
            isSearch={searchActive}
            onChange={e => setFilterString(e.target.value)}
          />
          <S.Actions>
            <SearchIcon
              onClick={() => {
                if (searchActive) {
                  setFilterString('');
                  setSearchActive(false);
                } else {
                  setSearchActive(true);
                }
              }}
              active={searchActive}
            />
          </S.Actions>
        </S.Header>
        <S.Body>
          {filteredUsers.map(user => (
            <Member user={user} roles={roles} toggleUserRole={toggleUserRole} />
          ))}
        </S.Body>
      </S.Content>
    </S.Container>
  );
};

export default Members;
