import { useRouter } from 'next/router';
import { COMPANY_NAME } from 'utils/config';
import Popup from 'components/UI/Popup';

export default ({ show, close, user, roles, toggleUserRole }) => {
  const router = useRouter();

  const items = roles.map(role => ({
    type: 'checkbox',
    label: role.title,
    active: user.role.filter(userRole => userRole.id === role.id).length === 1,
    onClick: () => toggleUserRole(user, role),
  }));
  items.push({
    type: 'separator',
  });
  items.push({
    type: 'default',
    label: 'New role',
    onClick: () =>
      router.push(`/[company]/settings/roles/new`, `/${COMPANY_NAME()}/settings/roles/new`, {
        shallow: true,
      }),
  });

  return <Popup opened={show} close={close} items={items} style={{ right: 0 }} />;
};
