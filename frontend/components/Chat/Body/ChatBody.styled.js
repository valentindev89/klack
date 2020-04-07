import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import chatEmpty from 'public/images/fox.png';

export const Container = styled(PerfectScrollbar).attrs({
  id: 'vs-chat',
})`
  height: 100%;
  margin: 0;
  margin-bottom: 15px;
  padding: 15px 0 0 0;
  :hover {
    .ps__thumb-y {
      opacity: 1;
    }
  }
`;

export const Date = styled.div`
  text-align: center;
  margin: 2px 0;
  position: relative;
  margin-top: 15px;
  margin-bottom: 20px;
  height: 19px;
  width: 929px;
`;

export const DateText = styled.span`
  font-weight: 500;
  font-size: 13px;
  color: ${props => props.theme.chatDate};
  text-align: center;
  position: relative;
`;

export const NewMessage = styled.div`
  text-align: center;
  margin-top: 2px;
  position: relative;
  :before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: #f19393;
    position: absolute;
    left: 0;
    top: 10px;
    z-index: -1;
  }
`;

export const NewMessageText = styled.span`
  display: inline-block;
  font-weight: 600;
  font-size: 11px;
  color: #dd3030;
  line-height: 17px;
  background: #fff;
  padding: 0 7px;
`;

export const ChatEmptyContainer = styled.div`
  height: calc(100% - 140px);
  width: calc(100% - 60px);
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ChatEmptyImage = styled.img.attrs({
  alt: 'Empty',
  src: chatEmpty,
})`
  user-select: none;
`;

export const ChatEmptyText = styled.p`
  margin-top: 20px;
  text-align: center;
  color: #131313;
  font-size: 15px;
  font-weight: 400;
  color: ${props => props.theme.chatText};
`;
