// eslint-disable-next-line import/prefer-default-export
export const COMPANY_NAME = () => {
  if (window.parent.document.getElementById('klack-iframe')) {
    return window.parent.document.getElementById('klack-iframe').src.split('/')[3];
  }
  return location.pathname.split('/')[1];
};
