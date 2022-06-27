import * as React from 'react';
import styled from 'styled-components';
import Image from './Image';
import booksJpg from '../assets/books.jpg';
import booksWebp from '../assets/books.webp';

const Background = styled.div`
  background: linear-gradient(#c6cacf, #bfc3c9);
  width: 100%;
  grid-column: 1 / 4;
  text-align: center;
`;

function Cover() {
  return (
    <Background>
      <Image
        source={booksWebp}
        fallback={booksJpg}
        alt="The Art of Micro Frontends Book Promo"
        width={1024}
        height={768}
      />
    </Background>
  );
}

export default Cover;
