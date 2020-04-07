import shareIcon from 'public/icons/share.svg';
import Tooltip from 'components/UI/Tooltip';

import { Action, TooltipWrapper } from '../MessageActions.styled';
import * as S from './ReplyAction.styled';

export default ({ onReply }) => (
  <>
    <Action aria-label="Reply" type="button" name="button" onClick={onReply}>
      <S.ShareIcon>
        <use xlinkHref={`${shareIcon}#icon-share`} />
      </S.ShareIcon>
      <TooltipWrapper>
        <Tooltip>Reply</Tooltip>
      </TooltipWrapper>
    </Action>
  </>
);
