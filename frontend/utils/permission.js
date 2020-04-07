export const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

export const isOwner = user => {
  if (isEmpty(user)) return false;
  if (user.owner && user.owner === '1') return true;
  return false;
};

export const canManageCommunity = user => {
  if (isEmpty(user)) return false;
  if (isOwner(user)) return true;
  let hasPermission = false;
  user.role.forEach(role => {
    if (role.roleSettings.includes('manage_community')) {
      hasPermission = true;
    }
  });

  return hasPermission;
};

export const canManageRole = user => {
  if (isEmpty(user)) return false;
  if (isOwner(user)) return true;
  let hasPermission = false;
  user.role.forEach(role => {
    if (role.roleSettings.includes('manage_role')) {
      hasPermission = true;
    }
  });

  return hasPermission;
};

export const canManageChannel = user => {
  if (isEmpty(user)) return false;
  if (isOwner(user)) return true;
  let hasPermission = false;
  user.role.forEach(role => {
    if (role.roleSettings.includes('manage_channel')) {
      hasPermission = true;
    }
  });

  return hasPermission;
};

export const canDeleteMessage = (user, message) => {
  if (isEmpty(user)) return false;
  if (isOwner(user)) return true;
  let hasPermission = false;
  user.role.forEach(role => {
    if (role.roleSettings.includes('delete_message')) {
      hasPermission = true;
    }
  });

  if (user.username === message.username) return true;

  return hasPermission;
};

export const canEditMessage = (user, message) => {
  if (isEmpty(user)) return false;
  if (isOwner(user)) return true;
  const hasPermission = false;

  if (user.username === message.username) return true;

  return hasPermission;
};
