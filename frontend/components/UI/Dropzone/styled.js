import styled from 'styled-components';
import ArrowUp from 'public/icons/arrow-up.svg';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ecececfa;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 29px;
  color: #1d1c1d;
  margin-top: 38px;
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #131313;
  margin-top: 19px;
`;

export const LogoWrapper = styled.div`
  background-color: #fff;
  border-radius: 50%;
  border: 1px dashed #999;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  :after {
    background: url(${ArrowUp});
    background-color: #34378b;
    padding: 10px;
    background-repeat: no-repeat;
    background-size: 25px 25px;
    background-position: center;
    border-radius: 50%;
    content: '';
    width: 30px;
    height: 30px;
    display: block;
    position: absolute;
    right: -5px;
    bottom: -5px;
  }
`;

export const LogoImage = styled.img`
  width: 37px;
`;
