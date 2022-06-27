import * as React from 'react';
import styled from 'styled-components';
import Articles from './Articles';
import Author from './Author';
import Book from './Book';
import Cover from './Cover';
import Examples from './Examples';
import Videos from './Videos';
import Links from './Links';
import Talks from './Talks';
import Shops from './Shops';
import Reviews from './Reviews';
import Outline from './Outline';
import Buy from './Buy';
import Footer from './Footer';

const Grid = styled.div`
  display: grid;
  grid-column-gap: 1.5rem;
  grid-gap: 1.5rem;
  grid-row-gap: 0.5rem;

  @media only screen and (max-width: 999px) {
    grid-template-areas:
      'book'
      'buy'
      'outline'
      'author'
      'reviews'
      'articles'
      'talks'
      'videos'
      'examples'
      'shops'
      'links';
  }

  @media only screen and (min-width: 1000px) {
    grid-template-areas:
      'book       author'
      'buy           buy'
      'outline   outline'
      'reviews   reviews'
      'articles   videos'
      'articles examples'
      'articles    shops'
      'talks       links';
    grid-template-columns: 1fr 1fr;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 4rem;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-image: linear-gradient(135deg, #0e73cc 1.93%, #624bbb 14.86%, #ff455d 48.09%, #f35815 77.82%, #f2b600 97.3%);
`;

function Content() {
  return (
    <>
      <Cover />
      <Title>The Art of Micro Frontends</Title>
      <Grid>
        <Book />
        <Author />
        <Buy />
        <Outline />
        <Reviews />
        <Articles />
        <Examples />
        <Shops />
        <Talks />
        <Videos />
        <Links />
      </Grid>
      <Footer />
    </>
  );
}

export default Content;
