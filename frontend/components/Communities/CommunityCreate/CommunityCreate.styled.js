import styled from 'styled-components';

import newCommunityBg from 'public/images/new-community-bg.png';

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  background: ${props => props.theme.chatBG};
`;

export const Header = styled.div`
  padding: 12px 23px;
  height: 73px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid ${props => props.theme.chatHeaderBorder};
`;
export const Title = styled.h2`
  margin: 0;
  display: flex;
  align-items: center;
  color: ${props => props.theme.titleColor};
  font-size: 18px;
  font-weight: 700;
`;
export const Body = styled.div`
  padding: 23px 23px 0;
  width: calc(100% - 46px);
`;

export const Picture = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${newCommunityBg});
  background-position: center;
  background-size: cover;
  position: fixed;
  right: 0;
  top: 0;
`;
