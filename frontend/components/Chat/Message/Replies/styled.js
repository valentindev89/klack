import styled from 'styled-components';
import DefaultAvatar from 'components/UI/Avatar';

export const ReplyBlock = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  border-radius: 3px;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  line-height: 13px;
  padding: 2px 10px 2px 3px;
  overflow: hidden;
  cursor: pointer;

  .arrow-active {
    display: none;
  }

  :hover {
    opacity: 0.85;
  }
`;

export const ReplyAvatars = styled.div`
  max-width: 165px;
  height: 22px;
`;

export const ReplyAvatarItem = styled(DefaultAvatar).attrs({
  alt: 'Avatar',
})`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: cover;
  border-radius: 4px;
  border: ${props => props.theme.replyAvatarBorder};
`;

export const ReplyNumber = styled.span`
  margin-left: 8px;
  color: ${props => props.theme.replyText};
  font-size: 13px;
  font-weight: 500;
  line-height: 22px;
`;

export const ViewRepliesIcon = styled.svg`
  width: 14px;
  height: 14px;
  margin-left: 4px;
  stroke: ${props => props.theme.replyIcon};
  svg {
    stroke: ${props => props.theme.replyIcon} !important;
  }
`;
