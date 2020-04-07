import styled from 'styled-components';

export const Container = styled.div`
  width: 420px;
  height: 560px;
  background: ${props => props.theme.popupBG};
  box-shadow: 0 10px 25px rgba(6, 8, 37, 0.14);
  opacity: 0;
  position: fixed;
  top: 60px;
  border-radius: 8px;
  z-index: 5;
  left: 22px;
  left: 8px;
  visibility: hidden;
  :before {
    content: '';
    display: block;
    left: 31px;
    left: 13px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 9px 8px;
    border-color: transparent transparent ${props => props.theme.popupBG} transparent;
    position: absolute;
    top: -9px;
    z-index: 4;
    filter: drop-shadow(0px -1.7px 1.3px rgba(0, 0, 0, 0.04));
  }
  ${props =>
    props.opened &&
    `
    opacity: 1;
    visibility: visible;
  `}
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px 25px 18px 30px;
  color: ${props => props.theme.textColor};
`;

export const Nav = styled.div`
  display: flex;
  height: 23px;
  margin-top: 15px;
  > div {
    display: flex;
    justify-content: space-between;
    .tab {
      /* color: #1d1c1d; */
      color: ${props => props.theme.textColor};
      font-weight: 400;
      font-size: 14px;
      padding: 0 2px 7px 2px;
      letter-spacing: 0.23px;
      &:first-child {
        margin-right: 7px;
      }
    }
    .active {
      font-weight: 500;
      border-bottom: 2px solid #69a9ff;
      letter-spacing: 0;
    }
  }
  .display {
    /* color: #1d1c1d; */
    color: ${props => props.theme.textColor};
    opacity: 0.9;
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    > span {
      text-decoration: underline;
      color: ${props => props.theme.textColor};
      :hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.h4`
  font-size: 17px;
  font-weight: 700;
  line-height: 100%;
  padding: 0;
  margin: 0 10px 0 0;
  color: ${props => props.theme.textColor};
`;

export const Count = styled.span`
  padding: 2px 6px 1px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: #f45151;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  box-sizing: border-box;
  min-height: 18px;
`;

export const MarkAsRead = styled.button.attrs({
  type: 'button',
})`
  font-weight: 400;
  font-size: 14px;
  color: ${props => props.theme.chatText};
  background: ${props => props.theme.popupBG};
  margin-right: 15px;
  margin-bottom: -1px;
  :hover {
    text-decoration: underline;
  }
`;

export const CloseIcon = styled.svg`
  width: 12px;
  height: 12px;
  margin-right: -2px;
  fill: ${props => props.theme.iconColor};
  cursor: pointer;
`;

export const NotificationsWrapper = styled.div`
  height: calc(100% - 96px);
  overflow-y: auto;
  margin: 0 5px 0 0;
  padding: 0 11px 0 21px;
`;
