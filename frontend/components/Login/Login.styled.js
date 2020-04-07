import styled from 'styled-components';

export const Container = styled.div`
  background: #69a9ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CloseIcon = styled.svg`
  fill: #fff;
  height: 18px;
  width: 18px;
  top: 25px;
  right: 25px;
  position: absolute;
  cursor: pointer;
  :hover {
    opacity: 0.75;
  }
`;

export const BackIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #fff;
  cursor: pointer;
  :hover {
    opacity: 0.75;
  }
`;

export const Text = styled.h2`
  margin: 16px 0 19px;
  font-size: 30px;
  line-height: 36px;
  color: #fff;
  font-family: 'Product Sans Bold';
  font-weight: 600;
`;

export const Button = styled.div`
  width: 300px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 6px;
  font-size: 15px;
  line-height: 18px;
  font-family: 'Product Sans Bold';
  font-weight: 600;
  border: none;
  color: #69a9ff;
  :hover {
    opacity: 0.85;
  }
`;

export const TwitterIcon = styled.svg`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  fill: #69a9ff;
`;

export const Error = styled.span`
  margin-top: 19px;
  font-family: 'Product Sans Bold';
  font-weight: 600;
  color: #6b2626;
`;
