import styled, { keyframes } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

const openMenu = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const Wrapper = styled.div`
  width: 537px;
  height: calc(100% - 42px);
  border-left: 1px solid ${props => props.theme.chatHeaderBorder};
  outline: none;
  overflow-x: hidden;
  position: absolute;
  z-index: 1;
`;
// border-left: 1px solid ${props => props.theme.chatHeaderBorder};

export const Container = styled.div`
  transform: translateX(0);
  background: ${props => props.theme.chatBG};
  animation: 0.1s ${openMenu} ease-out;
  width: 100%;
  height: calc(100% - 66px);
  box-sizing: border-box;
`;
// export const Container = styled.div`
//   display: none;
//   float: left;
//   width: 538px;
//   height: 598px;
//   background: #fff;
//   border-left: 1px solid #e8e8e8;
//   transition: 0.3s;
//   :hover {
//     display: block;
//   }
// `;

export const Header = styled.div`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 15px 21px;
  height: 73px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid ${props => props.theme.chatHeaderBorder};
`;

export const Title = styled.h1`
  margin: 0;
  color: ${props => props.theme.titleColor};
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h3`
  margin: 0;
  color: ${props => props.theme.subtitleColor};
  font-size: 14px;
  font-weight: 400;
`;

export const Content = styled(PerfectScrollbar)`
  padding-left: 1px;
  overflow-x: hidden;
  margin-bottom: 15px;
  max-height: calc(100% - 81px);
  // height: calc(100% - 66px);
  .message {
    padding: 2px 15px;
  }

  .parent-message {
    padding: 0 15px;
    margin: 15px 0 0 0;
  }

  :hover {
    .ps__thumb-y {
      opacity: 1;
    }
  }
`;

export const ReplyNumber = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 5px 0;
  display: block;
  position: relative;
  box-sizing: border-box;

  :after {
    border-bottom: 1px solid #e2e2e2;
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    top: 50%;
    left: 5%;
    right: 5%;
    z-index: -1;
  }

  span {
    background: #fff;
    font-weight: 400;
    font-size: 12px;
    color: #616061;
    padding: 5px;
  }
`;

export const MessageList = styled.div`
  width: 100%;
  padding-top: 10px;
  min-height: 100px;
  overflow: hidden;
`;
