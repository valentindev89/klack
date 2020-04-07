import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: ${props => props.theme.chatAuthor};
`;

class Error extends Component {
  static getInitialProps() {
    const isServer = typeof window === 'undefined';
    return { isServer };
  }

  render() {
    return (
      <Container>
        <Message>404</Message>
      </Container>
    );
  }
}

export default Error;
