import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Articles from './components/Articles';
import Author from './components/Author';
import Book from './components/Book';
import Examples from './components/Examples';
import Videos from './components/Videos';
import Links from './components/Links';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
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

const Grid = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-gap: 20px;
  grid-row-gap: 10px;
  margin: auto;
  min-width: 500px;

  @media only screen and (max-width: 999px) {
    grid-template-areas:
      "title"
      "book"
      "author"
      "articles"
      "videos"
      "examples"
      "links";
  }

  @media only screen and (min-width: 1000px) {
    grid-template-areas:
      "title     title"
      "author     book"
      "articles videos"
      "examples  links";
    grid-template-columns: 1fr 1fr;
    width: 1000px;
  }
`;

const Title = styled.h1`
  grid-area: title;
  text-align: center;
  font-weight: bold;
  font-size: 3rem;
`;

export const Page: React.FC = () => (
  <>
    <GlobalStyle />
    <Grid>
      <Title>The Art of Micro Frontends</Title>
      <Book />
      <Author />
      <Articles />
      <Examples />
      <Videos />
      <Links />
    </Grid>
  </>
);
