import { useRef, useCallback, useContext } from 'react';
import { useWindowDimensions } from 'hooks';
import { UserContext } from 'context';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { PortalWithState } from 'react-portal';

import { canDeleteMessage, canEditMessage } from 'utils/permission';

import Tooltip from 'components/UI/Tooltip';
import Flag from 'components/UI/Flag';
import moreIcon from 'public/icons/more.svg';

import DirectMenuItem from './Direct';
import { Action, TooltipWrapper } from '../MessageActions.styled';
import * as S from './More.styled';

const MorePopup = ({ close, getPosition, user, messageAuthor, onShare, onEdit, onDelete }) => {
  return (
    <S.Overlay onClick={close}>
      <S.MoreMenu position={getPosition()} className="modal-more">
        <DirectMenuItem messageAuthor={messageAuthor} />
        <S.MoreMenuItem onClick={onShare}>Copy link</S.MoreMenuItem>
        {canEditMessage(user, messageAuthor) && (
          <S.MoreMenuItem onClick={onEdit}>Edit</S.MoreMenuItem>
        )}
        {canDeleteMessage(user, messageAuthor) && (
          <S.MoreMenuItem onClick={onDelete}>Delete</S.MoreMenuItem>
        )}
      </S.MoreMenu>
    </S.Overlay>
  );
};

export default ({ onEdit, messageId, messageAuthor, setShow }) => {
  const ref = useRef(null);
  const windowSize = useWindowDimensions();

  const { user, addMessageQueue, removeMessageQueue } = useContext(UserContext);

  const {
    query: { community: communityUrl, channel: channelUrl, company: companyUrl },
  } = useRouter();

  const onShare = () => {
    const threadId = null;

    const link = `${
      process.env.FRONTEND_URL
    }/${companyUrl}/${communityUrl}/${channelUrl}?linkMessageId=${messageId}${
      threadId ? `&threadId=${threadId}` : ''
    }`;

    navigator.clipboard.writeText(link);
  };

  const onDelete = () => {
    toast(
      <Flag
        label="Message deleted"
        action={{
          label: 'Undo',
          onClick: () => removeMessageQueue(messageId),
        }}
      />,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        onOpen: () => addMessageQueue(messageId),
      }
    );
  };

  const getPosition = useCallback(() => {
    const { y, x } = ref.current.getBoundingClientRect();

    if (windowSize.height < y + 200) {
      return { x: windowSize.width - x, y: windowSize.height - y + 10, position: 't' };
    }
    return { x: windowSize.width - x, y: y + 35, position: 'b' };
  }, [user]);

  if (!user) return <div />;

  return (
    <PortalWithState
      closeOnOutsideClick
      closeOnEsc
      node={document && document.getElementById('ReactModalPortal')}
    >
      {({ openPortal, closePortal, portal }) => (
        <>
          <Action onClick={openPortal}>
            <S.MoreIcon className="more-icon" ref={ref}>
              <use xlinkHref={`${moreIcon}#icon-more`} />
            </S.MoreIcon>
            <TooltipWrapper>
              <Tooltip>More</Tooltip>
            </TooltipWrapper>
          </Action>
          {portal(
            <MorePopup
              close={() => {
                closePortal();
                setShow(false);
              }}
              getPosition={getPosition}
              user={user}
              messageAuthor={messageAuthor}
              onShare={onShare}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          )}
        </>
      )}
    </PortalWithState>
  );
};
