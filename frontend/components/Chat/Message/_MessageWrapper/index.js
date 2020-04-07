import { useRef, useState } from 'react';
import moment from 'moment';
import { PortalWithState } from 'react-portal';
import { useWindowDimensions } from 'hooks';
import UserPopup from 'components/UI/UserPopup';
import * as S from './styled';
/* eslint-disable jsx-a11y/anchor-is-valid */

const ChildMessageWrapper = ({ message, children, isEditing, isDeleted }) => (
  <S.Container child isEditing={isEditing} isDeleted={isDeleted}>
    <S.Content child>
      <S.Time child>{moment(message.createdAt).fromNow()}</S.Time>
      {children}
    </S.Content>
  </S.Container>
);

const UserPopupWrapper = ({ message }) => {
  const ref = useRef(null);
  const windowSize = useWindowDimensions();

  const getPosition = () => {
    const { y, x } = ref.current.getBoundingClientRect();

    if (windowSize.height < y + 350) {
      return { x, y: windowSize.height - y + 10, position: 't' };
    }
    return { x, y: y + 35, position: 'b' };
  };

  return (
    <PortalWithState
      closeOnOutsideClick
      closeOnEsc
      node={document && document.getElementById('ReactModalPortal')}
    >
      {({ openPortal, closePortal, portal }) => (
        <>
          <S.NameLink ref={ref} onClick={openPortal}>
            {message.author.username}
          </S.NameLink>
          {portal(
            <UserPopup
              username={message.author.username}
              getPosition={getPosition}
              close={() => {
                closePortal();
              }}
            />
          )}
        </>
      )}
    </PortalWithState>
  );
};
const ParentMessageWrapper = ({ message, children, isEditing, isPreview, isDeleted }) => {
  const [showUserPopup, setShowUserPopup] = useState(false);

  return (
    <S.Container
      isEditing={isEditing}
      onMouseLeave={() => setShowUserPopup(false)}
      isDeleted={isDeleted}
    >
      <S.Avatar src={message.author.image} name={message.author.username} />

      <S.Content>
        <S.User>
          {isPreview ? (
            <S.Name>{message.author.username}</S.Name>
          ) : (
            <UserPopupWrapper message={message} />
          )}
          <S.Time>{moment(message.createdAt).format('h:mm A')}</S.Time>
        </S.User>
        {children}
      </S.Content>
    </S.Container>
  );
};
const MessageWrapper = ({ isChild, ...props }) =>
  isChild ? ChildMessageWrapper(props) : ParentMessageWrapper(props);

export default MessageWrapper;
