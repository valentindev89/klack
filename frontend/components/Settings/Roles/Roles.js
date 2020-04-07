import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';

import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import { GET_ROLE, CREATE_ROLE, UPDATE_ROLE, DELETE_ROLE } from 'apis/Role';

import Popup from 'components/UI/Popup';
import { Input, ColorInput, ToggleInput } from 'components/UI/Input';
import { ButtonPrimary, ButtonSubtle } from 'components/UI/Button';
import { PlusIcon, MoreIcon } from 'components/UI/Icons';

import * as S from './Roles.styled';

// import { useRouter } from 'next/router';
// import { COMPANY_NAME } from 'utils/config';
// import Popup from 'components/UI/Popup';
// import plusIcon from 'public/icons/plus3.svg';
// import * as S from './MorePopup.styled';

// const MorePopup = ({ opened, close }) => {
//   const {
//     query: { community: communityUrl },
//     push,
//   } = useRouter();

//   const items = [
//     {
//       label: 'New channel',
//       icon: (
//         <S.PlusIcon>
//           <use xlinkHref={`${plusIcon}#icon-plus3`} />
//         </S.PlusIcon>
//       ),
//       onClick: () =>
//         push(
//           `/[company]/[community]/new-channel`,
//           `/${COMPANY_NAME()}/${communityUrl}/new-channel`,
//           { shallow: true }
//         ),
//     },
//   ];
//   return <Popup opened={opened} close={close} items={items} />;
// };

// export default MorePopup;

const permissions = [
  {
    key: 'manage_community',
    label: 'Manage communities',
    tip: 'Can member create, update and delete communities?',
  },
  {
    key: 'manage_channel',
    label: 'Manage channels',
    tip: 'Can member create, update and delete channels?',
  },
  {
    key: 'manage_role',
    label: 'Manage roles',
    tip: 'Can member manage roles?',
  },
  {
    key: 'chat_permission',
    label: 'Chat permission',
    tip: 'Can member type in chat?',
  },
  {
    key: 'upload_image',
    label: 'Upload images',
    tip: 'Can member upload images?',
  },
  {
    key: 'post_links',
    label: 'Post links',
    tip: 'Can member post links?',
  },
  {
    key: 'delete_message',
    label: 'Delete messages',
    tip: 'Can member delete messages',
  },
];

const defaultPermissions = {
  manage_community: false,
  manage_channel: false,
  manage_role: false,
  chat_permission: false,
  upload_image: false,
  post_links: false,
  delete_message: false,
};

export default ({ newRole }) => {
  const [selectedRole, setRole] = useState(null);
  const [showMorePopup, setShowMorePopup] = useState(false);
  const [permissionsObject, setPermissionObject] = useState({});
  const [getRoles, { data: { roles = [] } = {}, loading: rolesLoading }] = useLazyQuery(GET_ROLE);

  const [createRole] = useMutation(CREATE_ROLE, {
    update(cache, { data: { createRole: role } }) {
      const { roles: cachedRoles } = cache.readQuery({ query: GET_ROLE });
      cache.writeQuery({
        query: GET_ROLE,
        data: { roles: cachedRoles.concat([role]) },
      });
    },
  });
  const [updateRole] = useMutation(UPDATE_ROLE, {});
  const [deleteRole] = useMutation(DELETE_ROLE, {
    update(cache, { data: { deleteRole: deletedRole } }) {
      const { roles: cachedRoles } = cache.readQuery({ query: GET_ROLE });
      cache.writeQuery({
        query: GET_ROLE,
        data: { roles: cachedRoles.filter(e => e.id !== deletedRole.id) },
      });
    },
  });

  useEffect(() => {
    getRoles();
  }, []);

  useEffect(() => {
    if (roles.length > 0 && !newRole) {
      setRole(roles[0]);
    }
  }, [roles.length]);

  const transformPermissionsToObject = () => {
    if (selectedRole) {
      const newPermissionObject = {};
      const permissionsString = selectedRole.roleSettings;

      permissions.forEach(p => {
        if (permissionsString.includes(p.key)) {
          newPermissionObject[p.key] = true;
        } else {
          newPermissionObject[p.key] = false;
        }
      });

      return newPermissionObject;
    }
    return defaultPermissions;
  };

  const transformPermissionsToString = values => {
    const permissionsArray = [];

    // eslint-disable-next-line
    for (const [key, value] of Object.entries(values)) {
      const isPermissionKey = key !== 'title' && key !== 'color';

      // for permissions
      if (isPermissionKey && (value === true || value[0] === 'on')) {
        permissionsArray.push(key);
      }
    }

    return permissionsArray.toString();
  };

  useEffect(() => {
    setPermissionObject(transformPermissionsToObject(selectedRole));
  }, [selectedRole]);

  const onSubmit = async values => {
    const roleSettings = transformPermissionsToString(values);

    const payload = {
      title: values.title,
      color: values.color,
      roleSettings,
    };

    if (selectedRole !== null) {
      const {
        data: { updateRole: updatedRole },
        // errors,
      } = await updateRole({
        variables: { id: selectedRole.id, ...payload },
        errorPolicy: 'all',
      });
      setRole(updatedRole);
    } else {
      const {
        data: { createRole: createdRole },
        // errors,
      } = await createRole({
        variables: payload,
        errorPolicy: 'all',
      });
      setRole(createdRole);
    }
  };

  if (rolesLoading) {
    return <div />;
  }

  return (
    <S.Container>
      <S.Header>
        <S.Roles>
          {roles.map(role => (
            <S.Role
              key={role.id}
              active={selectedRole && selectedRole.title === role.title}
              onClick={() => setRole(role)}
            >
              {role.title}
            </S.Role>
          ))}

          <S.Role active={!selectedRole} onClick={() => setRole(null)}>
            New role
          </S.Role>
        </S.Roles>
        <S.Actions>
          <S.PlusIconWrapper onClick={() => setRole(null)}>
            <PlusIcon active={selectedRole === null} />
          </S.PlusIconWrapper>
          {selectedRole && (
            <>
              <MoreIcon active={showMorePopup} onClick={() => setShowMorePopup(!showMorePopup)} />
              <Popup
                opened={showMorePopup}
                close={() => setShowMorePopup(false)}
                items={[
                  {
                    label: 'Delete role',
                    onClick: () => {
                      deleteRole({
                        variables: {
                          id: selectedRole.id,
                        },
                      });
                      setRole(roles[0]);
                      setShowMorePopup(false);
                    },
                  },
                ]}
              />
            </>
          )}
        </S.Actions>
      </S.Header>
      <S.Body>
        <Formik
          initialValues={(() => {
            if (selectedRole !== null) {
              return {
                title: selectedRole.title,
                color: selectedRole.color,
                ...permissionsObject,
              };
            }
            return {
              title: '',
              color: '#19BC9B',
              ...permissionsObject,
            };
          })()}
          enableReinitialize
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form style={{ paddingBottom: 76, paddingTop: 73 }}>
              <Field
                type="text"
                name="title"
                label="Role name"
                placeholder="Enter role name"
                component={Input}
              />
              <Field label="Role color" name="color" component={ColorInput} />
              <S.SectionTitle>General permissions</S.SectionTitle>
              {permissions.map(permission => (
                <Field
                  key={permission.key}
                  type="text"
                  name={permission.key}
                  label={permission.label}
                  tip={permission.tip}
                  component={ToggleInput}
                />
              ))}
              <S.Footer>
                <ButtonPrimary
                  type="submit"
                  name="button"
                  disabled={isSubmitting}
                  style={{ marginRight: 10 }}
                >
                  {selectedRole === null ? 'Create' : 'Save'}
                </ButtonPrimary>
                {selectedRole === null && (
                  <ButtonSubtle
                    type="submit"
                    name="button"
                    onClick={() => {
                      setRole(roles[0]);
                    }}
                  >
                    Cancel
                  </ButtonSubtle>
                )}
              </S.Footer>
            </Form>
          )}
        </Formik>
      </S.Body>
    </S.Container>
  );
};
