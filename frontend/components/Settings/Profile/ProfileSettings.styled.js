import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
  background: ${props => props.theme.chatBG};
`;

export const Body = styled.div`
  padding: 20px 22px;
  box-sizing: border-box;
`;

export const AvatarBlock = styled.div``;

export const Content = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  justify-content: center;
`;

export const Header = styled.div`
  height: 73px;
  padding: 12px 23px;
  box-sizing: border-box;
  border-bottom: 1px solid ${props => props.theme.chatHeaderBorder};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Heading = styled.h3`
  color: ${props => props.theme.titleColor};
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img.attrs({
  alt: 'Avatar',
})`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 7px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  margin-right: 25px;
  box-shadow: 0 10px 30px rgba(6, 8, 37, 0.06);
  flex-shrink: 0;
`;
