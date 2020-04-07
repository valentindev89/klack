import styled from 'styled-components';
import mention from 'public/icons/quote.svg';
import CommonAvatar from 'components/UI/Avatar';

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  align-items: flex-start;
  text-align: left;
  border-radius: 4px;
  margin-bottom: 12px;
  padding: 6px 6px 4px 6px;
  :hover {
    background: ${props => props.theme.notificationBGHover};
  }
`;

export const AvatarWrapper = styled.div`
  width: 30px;
  min-width: 30px;
  height: 30px;
  position: relative;
  :after {
    content: '';
    display: flex;
    width: 14px;
    height: 14px;
    background-image: url(${mention});
    background-size: cover;
    border-radius: 50%;
    position: absolute;
    right: -4px;
    bottom: -3px;
  }
`;

export const Avatar = styled(CommonAvatar).attrs({
  alt: 'Avatar',
})`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  overflow: hidden;
`;

export const Body = styled.div`
  cursor: pointer;
  line-height: 100%;
  margin-top: -2px;
  margin-left: 13px;
`;

export const Info = styled.div`
  font-size: 15px;
  color: ${props => props.theme.chatText};
  line-height: 22px;
`;

export const Author = styled.a`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.15px;
  color: ${props => props.theme.chatAuthor};
`;

export const Action = styled.span``;

export const Message = styled.p`
  margin: 0;
  padding: 0;
  font-size: 15px;
  font-weight: 400;
  line-height: 165%;
  color: ${props => props.theme.chatText};
`;

// export const Mention = styled.a`
// `;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  height: 24px;
  font-weight: 500;
  font-size: 13px;
  color: #fff;
  line-height: 24px;
  background: #5c24d4;
  border-radius: 5px;
  border: 1px solid #5c24d4;
  padding: 0 9px;
  :hover {
    background: #34378b;
  }
  :active {
    background: #212464;
  }
  ${props =>
    props.cancel &&
    `
    color: #000;
    background: #fff;
    border-color: #bababa;
    margin-left: 5px;
    :hover {
      background: #f6f6f6;
    }
    :active {
      background: #e6e4e4;
    }
  `}
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.theme.notificationDate};
  margin-left: 4px;
  display: inline-block;
`;

export const Link = styled.a`
  font-weight: 500;
  font-size: 13px;
  cursor: pointer;
  color: #1264a3 !important;
  :hover {
    text-decoration: underline !important;
  }
`;
