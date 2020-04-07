import styled from 'styled-components';
import CloseIcon from 'public/icons/close-white.svg';
import CloseIconActive from 'public/icons/close.svg';
import ArrowUp from 'public/icons/arrow-up.svg';

export const Container = styled.div`
  height: 30px;
  min-width: 180px;
  border-radius: 5px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  background: #69a9ff;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 90px;
  left: 50%;
  font-size: 12px;
`;

export const CloseButton = styled.button`
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  padding-left: 10px;
  border-radius: 0 5px 5px 0;

  &:hover {
    .close {
      background: url(${CloseIconActive});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;

export const CloseButtonContent = styled.div`
  background: url(${CloseIcon});
  width: 10px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 10px;
`;

export const TextBox = styled.div`
  margin: 0 10px;
`;

export const ScrollButton = styled.button`
  background: url(${ArrowUp});
  width: 15px;
  height: 20px;
  margin-left: 10px;
  transform: rotate(180deg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
