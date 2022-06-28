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
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr min(110ch, calc(100% - 2rem)) 1fr;

    & > * {
      grid-column: 2;
    }
  }

  * {
    box-sizing: border-box;
    font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  p {
    text-align: justify;
  }
`;

export const Page: React.FC = () => (
  <>
    <GlobalStyle />
    <Content />
  </>
);
