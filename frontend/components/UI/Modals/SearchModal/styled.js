import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;

export const ModalWrapper = styled.div``;
export const Modal = styled.div`
  position: relative;
  width: calc(100% - 46px);
  background: ${props => props.theme.searchModalBG};
  padding: 25px 23px;
  height: 20px;
  position: fixed;
  left: 0px;
  top: 43px;
`;

export const Header = styled.div``;

export const Input = styled.input`
  width: 363px;
  height: 20px;
  border: none;
  font-size: 18px;
  line-height: 18px;
  color: ${props => props.theme.searchModalInput};
  max-width: 300px;
  ::placeholder {
    color: white;
  }
`;

export const SearchIcon = styled.svg`
  fill: ${props => props.theme.searchModalSearchIcon};
  height: 16px;
  width: 16px;
  margin-right: 8px;
`;

export const CloseIcon = styled.svg`
  position: absolute;
  right: 25px;
  top: 27px;
  width: 14px;
  height: 14px;
  fill: ${props => props.theme.searchModalCloseIcon};
  cursor: pointer;
`;

export const Messages = styled.div`
  margin-top: 24px;
  background: ${props => props.theme.searchModalListBG};
  padding: 21px 23px;
  height: calc(100vh - 134px);
  overflow: auto;
  width: 100%;
  margin-left: -23px;
`;
