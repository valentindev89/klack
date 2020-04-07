import { useRef, useState, useCallback } from 'react';
import { useWindowDimensions } from 'hooks';
import { PortalWithState } from 'react-portal';
import { useMutation } from '@apollo/react-hooks';
import { TOGGLE_REACTION } from 'apis/Message';

import EmojiPicker from 'components/UI/EmojiPicker/EmojiPicker';
import Tooltip from 'components/UI/Tooltip';

import emojiIcon from 'public/icons/smile.svg';
import { Action, TooltipWrapper } from '../MessageActions.styled';
import * as S from './ReactionAction.styled';

const emojiPositionThreshold = 500;

export default ({ checkPosition, messageId, setShow }) => {
  const ref = useRef(null);
  const windowSize = useWindowDimensions();

  const [toggleReaction] = useMutation(TOGGLE_REACTION);

  const onEmojiClick = emoji => {
    toggleReaction({
      variables: {
        name: emoji.colons,
        messageId,
      },
    });
  };

  const getPosition = useCallback(() => {
    const { y, x } = ref.current.getBoundingClientRect();

    if (windowSize.height < y + 350) {
      return { x: windowSize.width - x, y: windowSize.height - y + 10, position: 't' };
    }
    return { x: windowSize.width - x, y: y + 35, position: 'b' };
  }, []);

  return (
    <PortalWithState
      closeOnOutsideClick
      closeOnEsc
      node={document && document.getElementById('ReactModalPortal')}
    >
      {({ openPortal, closePortal, portal }) => (
        <>
          <Action
            aria-label="Emoji"
            type="button"
            name="button"
            onClick={openPortal}
            style={{ padding: 0 }}
          >
            <S.ReactionIcon ref={ref}>
              <use xlinkHref={`${emojiIcon}#icon-smile`} />
            </S.ReactionIcon>
            <TooltipWrapper>
              <Tooltip>React</Tooltip>
            </TooltipWrapper>
          </Action>
          {portal(
            <EmojiPicker
              getPosition={getPosition}
              close={() => {
                closePortal();
                setShow(false);
              }}
              onSelect={onEmojiClick}
            />
          )}
        </>
      )}
    </PortalWithState>
  );
};
