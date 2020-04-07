import styled from 'styled-components';

import back from 'public/icons/back.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Form = styled.div`
  flex: 1;
  padding: 0 134px;
  width: calc(50vw - 268px);
  max-width: calc(50vw - 268px);
  display: flex;
  flex-direction: column;
  background: white;
  justify-content: space-between;
`;

export const Back = styled.button.attrs({
  type: 'button',
  ariaLabel: 'back',
})`
  margin: 53px 0;
  width: 40px;
  height: 40px;
  font-weight: 400;
  font-size: 14px;
  color: #615f61;
  background-image: url(${back});
  background-size: 17px 12px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  border: 1px solid #d4dce2;
  margin-top: 53px;
  position: relative;
  box-sizing: border-box;
  :hover {
    background-color: #f6f6f6;
  }
  :active {
    background-color: #e6e4e4;
  }
`;

export const Heading = styled.h1`
  font-weight: 600;
  font-size: 29px;
  color: #1d1c1d;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 15px;
  color: #131313;
  margin-top: 18px;
`;

export const Image = styled.div`
  flex: 1;
  width: 50vw;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  width: 250px;
  height: 50px;
  font-weight: 500;
  font-size: 15px;
  color: #fff;
  background: #5c24d4;
  border-radius: 6px;
  margin-top: 67px;
  :hover {
    background-color: #5a5dc0;
  }
  :active {
    background-color: #212464;
  }
  :before {
    content: '';
    display: inline-block;
    width: 17px;
    height: 17px;
    background-size: cover;
    margin-right: 10px;
    margin-bottom: -3px;
  }
`;

export const Footer = styled.footer`
  margin-top: 35px;
`;
