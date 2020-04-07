import styled from 'styled-components';
import loaderBG from 'public/images/loader-bg.jpg';
import logoWide from 'public/logo-wide.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 20;

  background-image: url(${loaderBG});
  background-size: cover;
  background-position: center;
  overflow: hidden;

  :before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.92);
    z-index: 0;
  }
`;

export const LogoBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img.attrs({
  src: logoWide,
  alt: 'klack',
})``;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: auto;
  bottom: 38px;
  left: 0;
  right: 0;

  font-family: 'Helvetica Neue';
  font-size: 16px;
  color: #33353b;
`;

export const Spinner = styled.svg`
  @keyframes rotator {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }
  }

  animation: rotator 1.4s linear infinite;
  margin-right: 10px;
`;

export const Circle = styled.circle`
  @keyframes dash {
    0% {
      stroke-dashoffset: 187;
    }
    50% {
      stroke-dashoffset: 46.75;
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
    }
    100% {
      stroke-dashoffset: 187;
      -webkit-transform: rotate(450deg);
      transform: rotate(450deg);
    }
  }

  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash 1.4s ease-in-out infinite;
  stroke: #33353b;
`;
