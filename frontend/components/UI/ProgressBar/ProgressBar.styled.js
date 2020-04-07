import styled, { keyframes } from 'styled-components';

const animatebar = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 60px 0;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: -29px;
`;

export const Container = styled.div`
  width: 100%;
  background: ${props => props.theme.navbarContainerBG};
  height: 22px;
  border-radius: 4px;
  text-align: left;
  position: relative;
  opacity: 0.8;
`;

export const FilledWrapper = styled.div`
  overflow: hidden;
  height: 22px;
  width: 100%;
`;

export const Filled = styled.div`
  border-radius: 4px;
  background: ${props => `
  linear-gradient(
    45deg,
    ${props.theme.navbarContainerBG} 25%,
    #69a9ff 0,
    #69a9ff 50%,
    ${props.theme.navbarContainerBG} 0,
    ${props.theme.navbarContainerBG} 75%,
    #69a9ff 0,
    #69a9ff)
  `};
  background-size: 60px 60px;
  height: 22px;
  transition: 0.5s width ease-in;
  animation: 1s ${animatebar} linear infinite;
`;

export const Label = styled.span`
  color: ${props => props.theme.chatAuthor};
  background: ${props => props.theme.chatBG};
  background-opacity: 0.5;
  font-size: 13px;
  font-weight: 500;
  position: absolute;
  right: 4px;
  top: 4px;
  padding: 2.5px 8px 0px;
  border-radius: 3px;
  opacity: 0.6;
`;
