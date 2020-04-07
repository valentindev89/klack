import styled from 'styled-components';

export const Container = styled.div`
  max-width: 300px;
  min-width: 250px;
  display: flex;
  float: left;
  border: 1px solid rgba(154, 154, 154, 0.49);
  margin-top: 5px;
  margin-right: 5px;
  border-radius: 3px;
  box-shadow: 0 0 2px #787878;

  .ImageIcon {
    height: 50px;
    width: 50px;
    background: #fff;
    border-right: 1px solid rgba(154, 154, 154, 0.6);
    object-fit: cover;
    object-position: center;
  }
`;
export const Description = styled.div`
  padding-left: 5px;
`;
export const FileIcon = styled.img`
  height: 50px;
  width: 50px;
  background: #fff;
  border-right: 1px solid rgba(154, 154, 154, 0.6);
  object-fit: cover;
  object-position: center;
`;

export const Name = styled.p``;
export const Bottom = styled.p``;
export const Size = styled.span`
  font-size: 14px;
  color: #7e7e7e;
  :after {
    content: '-';
    margin-left: 5px;
  }
`;

export const Link = styled.a`
  font-size: 14px;
  color: #2d73f2;
  margin-left: 5px;
`;
