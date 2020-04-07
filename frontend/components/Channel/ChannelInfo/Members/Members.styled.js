import styled, { keyframes } from 'styled-components';
import CloseIcon from 'public/icons/close.svg';

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

export const Container = styled.div`
  transform: translateX(0);
  background: ${props => props.theme.chatBG};
  animation: 0.1s ${openMenu} ease-out;
  width: 100%;
  height: calc(100vh - 66px);
  box-sizing: border-box;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 21px 12px 23px;
  height: 73px;
  margin-top: 0;
  box-sizing: border-box;
  border-bottom: 1px solid ${props => props.theme.chatHeaderBorder};
`;

export const Title = styled.h1`
  margin: 0;
  color: ${props => props.theme.titleColor};
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 11px;
`;

export const Subtitle = styled.h3`
  margin: 0;
  color: ${props => props.theme.subtitleColor};
  font-size: 14px;
  font-weight: 400;
  margin-bottom: -3px;
`;

export const UserIcon = styled.svg`
  position: relative;
  top: 1px;
  margin: 0 2px 0 -2px;
  height: 12px;
  width: 15px;
`;

export const List = styled.ul`
  font-weight: 500;
  font-size: 15px;
  color: #1d1c1d;
  padding: 0 9px;
  margin-top: 20px;
`;

export const Close = styled.button`
  background-color: transparent;
  height: 15px;
  width: 15px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${CloseIcon});
`;
