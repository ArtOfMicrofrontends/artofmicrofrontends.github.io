import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import Content from './components/Content';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family: "Helvetica Neue", Arial, sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Page: React.FC = () => (
  <>
    <GlobalStyle />
    <Content />
  </>
);
