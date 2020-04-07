import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    outline: none !important;
  }

  body {
    font-family: 'Helvetica Neue' !important;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  input {
    background: transparent;
  }

  textarea {
    border: 0;
    font-size: 15px;
    line-height: 26px;
    outline: none;
    background: transparent;
  }

  button, input {
    transition: background-color 0.2s ease-in-out,
                border-color 0.2s ease-in-out,
                opacity 0.2s ease-in-out;
  }

  .ps__rail-y {
    z-index: 1;
    background: ${props => props.theme.chatBG} !important;
    :hover {
      background: transparent !important;
    }
  }


  .ps__thumb-y {
    width: 7px !important;
    right: 7px !important;
    background-color: #888588 !important;
    transition: opacity 0.2s ease-in-out !important;
    opacity: 0;
  }

  .ps--active-y {
    .ps__rail-y {
      opacity: 1 !important;
    }
  }

  .ps__rail-y:hover {
    background-color: transparent;
  }

  .mention {
    color: #69A9FF;
    cursor: pointer;
    :hover {
      text-decoration: underline;
      opacity: 0.85;
    }
  }

  .emoji-mart-bar {
    display: none;
  }
  .emoji-mart-search {
    display: none;
  }
  .emoji-mart-category-label {
    font-weight: 500;
    font-size: 12px;
    color: #000000;
    margin-bottom: 8px;
  }
`;
