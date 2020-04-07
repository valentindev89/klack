import styled from 'styled-components';
import { MentionsInput, Mention } from 'react-mentions';
import DefaultAvatar from 'components/UI/Avatar';
import LockIcon from 'public/icons/lock.svg';
import AttachImage from 'public/icons/attach-image.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  &.disabled {
    pointer-events: none;

    .overlay {
      display: block;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border: none;
  outline: none;
  box-shadow: none;
  color: ${props => props.theme.chatText};
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  box-sizing: border-box;
  max-height: 60px;
  overflow: auto;
`;

export const AddAttachmentIcon = styled.svg`
  width: 21px;
  height: 21px;
  min-width: 21px;
  min-height: 21px;
  fill: #8c8c8c;
  cursor: pointer;
  margin-right: 14px;
  :hover {
    opacity: 0.75;
  }
`;

export const Attachment = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  object-position: center;
  margin: 5px;
  border-radius: 6px;
`;

export const Input = styled(MentionsInput)`
  width: 100%;
  font-weight: 400;
  font-size: 15px;
  color: ${props => props.theme.chatText};
  line-height: 26px;
  margin-left: 10px;

  textarea {
    color: ${props => props.theme.chatText} !important;
    padding: 0;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 19px;
  button {
    background-size: cover;
    text-align: left;
    :not(:last-of-type) {
      margin-right: 15px;
    }
  }
`;

export const AttachButton = styled.button.attrs({
  type: 'button',
  ariaLabel: 'Attach',
})`
  margin-right: 15px;
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='40px' height='38px'%3e%3cdefs%3e%3cfilter id='Filter_0'%3e%3cfeFlood flood-color='rgb(134, 134, 134);
`;

export const AttachImageWrapper = styled.label`
  margin-right: 15px;
  display: block;
  width: 20px;
  height: 20px;
  background-image: url(${AttachImage});
  background-repeat: no-repeat;
  cursor: pointer;
  background-size: contain;
`;

export const HiddenFileInput = styled.input.attrs({
  type: 'file',
  id: 'comment-image',
  accept: 'image/*',
})`
  width: 0px;
  height: 0px;
  visibility: hidden;
  display: 'none';
`;

export const EmojiButton = styled.button.attrs({
  type: 'button',
  ariaLabel: 'Emoji',
})`
  width: 20px;
  cursor: pointer;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='38px' height='38px'%3e%3cpath fill-rule='evenodd' fill='rgb(134, 134, 134);
`;

export const SendButton = styled.button.attrs({
  type: 'button',
  ariaLabel: 'Attach',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  min-width: 75px;
  height: 36px;
  border-radius: 5px;
  background-color: #69a9ff;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  line-height: 100%;
  border: none;
  box-shadow: none;
  cursor: pointer;
  padding-top: 0;
  padding-bottom: 0;

  font-family: 'Helvetica Neue';
  :hover {
    opacity: 0.75;
  }
`;

export const InputNonAuthorized = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: #f8f8f8;
  border-radius: 6px;
  border: 1px solid #d4d6da;
  padding: 0 10px 0 20px;
  margin: 0 auto;
`;

export const Paragraph = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: #000;
  margin-right: 10px;
  :before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 19px;
    background-image: url(${LockIcon});
    background-size: cover;
    margin-right: 18px;
    margin-bottom: -3px;
  }
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  width: 100%;
`;

export const MentionInputStyles = {
  suggestions: {
    list: {
      minWidth: '320px',
      display: 'block',
      background: '#fff',
      borderRadius: 6,
      border: '1px solid #e2e2e2',
      boxShadow: '0 20px 60px 0 rgba(6, 6, 37, 0.06)',
      paddingTop: 12,
      paddingBottom: 16,
      transition: 'opacity 0.2s ease-in-out',
      zIndex: '1',
      position: 'fixed',
      bottom: '60px',
    },
    item: {
      '&focused': {
        maxWidth: '270px',
      },
    },
  },
};

export const MentionStyles = {
  // background: '#e2edfb',
  color: '#69a9ff',
};

export const ListItem = styled.li`
  width: 100%;
  height: 28px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-items: center;
  white-space: nowrap;
  font-size: 15px;
  padding: 0 24px;
  overflow: hidden;
  cursor: pointer;
  margin-top: 4px;
  :hover {
    background: #212464;
    color: #fff;
  }
  &--focused {
    background: #212464;
    color: #fff;
  }
`;

export const Avatar = styled(DefaultAvatar).attrs({
  alt: 'Avatar',
})`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  overflow: hidden;
`;

export const Fullname = styled.p`
  margin: 0;

  max-width: 135px;
  font-weight: 500;
  color: #1d1c1d;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 11px;
  margin-bottom: -1px;
  ${ListItem}:hover & {
    color: white;
  }
`;

export const Username = styled.span`
  max-width: 100px;
  font-weight: 400;
  color: #616061;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 5px;
  ${ListItem}:hover & {
    color: #b6b8e7;
  }
`;

export const Status = styled.em`
  display: inline-block;
  width: 6px;
  height: 6px;
  border: 2px solid #616061;
  border-radius: 50%;
  margin-left: 10px;
  box-sizing: content-box;
  ${ListItem}:hover & {
    border-color: white;
  }
  ${props =>
    props.online &&
    `
    width: 10px;
    height: 10px;
    background: #007a5a;
    border: none;
    ${ListItem}:hover & {
      background: #34c19c;
    }
  `}
`;

export const Overlay = styled.div`
  display: none;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(163, 163, 163, 0.1);
  cursor: progress;
`;

export const ReactionIcon = styled.svg`
  width: 20px;
  min-width: 20px;
  height: 20px;
  fill: #8c8c8c;
  margin-right: 4px;
  cursor: pointer;
`;
