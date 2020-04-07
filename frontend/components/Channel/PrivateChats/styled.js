import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 42px);
  border-left: 1px solid ${props => props.theme.chatHeaderBorder};
  outline: none;
  overflow-x: hidden;
  position: absolute;
  z-index: 1;

  .chat-base-header {
    min-height: 60px;
    align-items: center;
    display: flex;
    border-bottom: 1px solid ${props => props.theme.chatHeaderBorder};
  }
  .chat-base-header__title {
    color: ${props => props.theme.chatAuthor};
    font-size: 15px;
    font-weight: 700;
    margin-left: 20px;
  }
  .chat-latest-body {
    margin-right: 5px;
    width: 100%;
    box-sizing: border-box;
    overflow-y: auto;
  }
`;
