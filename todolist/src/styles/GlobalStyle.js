import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400&display=swap');
  html, body, div, h1, h2, h3, h4, h5, h6, p, span, a, ul, li, input, button {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Noto Sans KR';
    font-weight: 400;
    font-size: 22px;
    color: #333;
  }
  li {
    list-style: none;
  }
  a {
    vertical-align: top;
  }
  a, input, button {
    color: inherit;
    font-size: inherit;
  }

  button {
    border: 0 none;
    background: 0 none;
    cursor: pointer;
  }

  input, button {
    &:focus {
      outline: 0;
    }
  }
`;

export default GlobalStyle;
