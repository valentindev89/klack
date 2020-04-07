import { isEmpty } from 'utils/permission';

export default ({ name, style, ...props }) => (
  <img
    alt="Avatar"
    src={new window.Pictogrify(!isEmpty(name) ? name : 'test', 'monsters').base64}
    style={style}
    {...props}
  />
);
