import styled from 'styled-components';
import hashtag from 'public/icons/hashtag.svg';
import hashtagWhite from 'public/icons/hashtag-white.svg';

export const Container = styled.div`
  position: relative;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 16px;
  margin-top: 30px;
`;

export const HeaderTitle = styled.p`
  font-weight: 500;
  font-size: 17px;
  color: #111111;
  margin-right: auto;
`;

export const List = styled.ul`
  font-weight: 500;
  font-size: 15px;
  color: #1d1c1d;
  padding: 0 9px;
  margin-top: 20px;
`;

export const ListItem = styled.li`
  position: relative;
  max-width: calc(100% - 16px);
  height: 31px;
  display: flex;
  align-items: center;
  line-height: 32px;
  white-space: nowrap;
  padding: 0 8px;
  border-radius: 5px;
  cursor: pointer;
  color: #616061;
  user-select: none;
  ${props =>
      props.unread &&
      `
    color: #1d1c1d;
  `}
    :hover {
    background: #ece6f5;
  }
  :active {
    background: #212464;
    color: #fff;
    :before {
      background-image: url(${hashtagWhite});
    }
  }
  :before {
    content: '';
    width: 16px;
    height: 15px;
    background-image: url(${hashtag});
    background-size: cover;
    align-self: center;
    margin-bottom: 2px;
    margin-right: 13px;
  }
  ${props =>
    props.active &&
    `
    background: #34378b;
    color: #fff;
    :before {
      background-image: url(${hashtagWhite});
    }
    :hover {
      background: #34378b;
      color: #fff;
    }
  `}
`;

export const UnreadCount = styled.em`
  height: 16px;
  font-style: normal;
  font-size: 12px;
  color: #fff;
  line-height: 18px;
  background: #f45151;
  border-radius: 9px;
  padding: 0 8px;
  position: absolute;
  top: 8px;
  right: 8px;
`;
