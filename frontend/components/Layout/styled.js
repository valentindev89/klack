import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  height: calc(100vh - 42px);
  background: ${props => props.theme.chatBG};
`;

export const Layout = styled.div.attrs({
  id: 'vs-layout',
})`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.chatBG};
  font-family: 'Helvetica Neue';
`;
