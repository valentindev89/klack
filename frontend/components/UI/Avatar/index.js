// import dynamic from 'next/dynamic';
// import AvatarPlaceholder from './AvatarPlaceholder';

// const AvatarGenerated = dynamic(import('./AvatarGenerated'), {
//   ssr: false,
//   loading: () => <AvatarPlaceholder />,
// });

const Avatar = ({ name, src, style, ...props }) => (
  <img alt="Avatar" src={src || `https://avatars.io/twitter/${name}`} style={style} {...props} />
);

export default Avatar;
