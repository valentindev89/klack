import styled from 'styled-components';
import PlusIcon from 'public/icons/plus-file.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const File = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${PlusIcon});
  background-repeat: no-repeat;
  background-size: 40px 40px;
  background-position: center center;
  border-radius: 6px;
  border: 1px solid #e2e2e2;
  margin-right: 24px;
  position: relative;
  overflow: hidden;
  transition: background-color 0.2s ease-in-out;
  ${props =>
      props.empty &&
      `
    box-shadow: none;
    cursor: pointer;
  `}
    :hover {
    border-color: #69a9ff;
  }
`;

export const InputLabel = styled.label`
  width: 100%;
  height: 100%;
  margin-bottom: 0px;
  cursor: pointer;
  z-index: 1;
  display: block;
`;

export const Input = styled.input`
  display: none;
`;

export const Image = styled.img.attrs({
  alt: 'Image',
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const FileInfo = styled.div`
  width: calc(100% - 174px);
`;

export const Label = styled.p`
  font-weight: 500;
  font-size: 15px;
  color: ${props => props.theme.chatAuthor};
  margin-bottom: 5px;
`;

export const Tip = styled.span`
  font-weight: 400;
  font-size: 15px;
  color: ${props => props.theme.notificationDate};
`;

export const FileTypes = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

export const FileType = styled.span`
  display: inline-block;
  height: 17px;
  font-weight: 500;
  font-size: 10px;
  color: #ffffff;
  line-height: 19px;
  text-transform: uppercase;
  background: #bfc0c4;
  border-radius: 4px;
  padding: 0 7px;
  margin-right: 5px;

  &.active {
    background: #1d1c1d;
  }
`;

export const RemoveButton = styled.button`
  height: 24px;
  font-size: 13px;
  color: #000;
  line-height: 24px;
  border-radius: 5px;
  border: 1px solid #bababa;
  padding: 0 9px;
  margin-top: 24px;
`;

export const Error = styled.div`
  font-weight: 500;
  font-size: 13px;
  color: #da3662;
  line-height: 20px;
  margin-top: 10px;
`;
