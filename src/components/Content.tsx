import * as React from 'react';
import styled from 'styled-components';
import Articles from './Articles';
import Author from './Author';
import Book from './Book';
import Examples from './Examples';
import Videos from './Videos';
import Links from './Links';

const Grid = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-gap: 20px;
  grid-row-gap: 10px;
  margin: auto;
  min-width: 350px;

  @media only screen and (max-width: 999px) {
    grid-template-areas:
      'title'
      'book'
      'author'
      'articles'
      'videos'
      'examples'
      'links';
  }

  @media only screen and (min-width: 1000px) {
    grid-template-areas:
      'title       title'
      'author       book'
      'articles   videos'
      'articles examples'
      'articles    links';
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

function Content() {
  return (
    <Grid>
      <Title>The Art of Micro Frontends</Title>
      <Book />
      <Author />
      <Articles />
      <Examples />
      <Videos />
      <Links />
    </Grid>
  );
}

export default Content;
