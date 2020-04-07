import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
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
export const Actions = styled.div``;
export const Action = styled.a``;
export const Body = styled.div`
  padding: 23px 23px 0;
  width: calc(100% - 46px);
`;

export const Page = styled.div`
  width: 100%;
`;

export const Left = styled.div`
  width: 50%;
  background: #fff;
`;

export const Content = styled.div`
  width: 452px;
  min-height: calc(100vh - 71px);
  margin: 0 auto;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 15px;
  color: #131313;
  line-height: 22px;
  margin-top: 20px;
`;

export const Footer = styled.footer`
  margin-top: 8px;
  display: flex;
`;
