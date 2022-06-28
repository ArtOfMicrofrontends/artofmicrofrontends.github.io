import * as React from 'react';
import styled from 'styled-components';
import Image from './Image';
import frontPng from '../assets/front-small.png';
import frontWebp from '../assets/front-small.webp';

const Intro = styled.q`
  font-size: 2rem;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
`;

const Section = styled.section`
  grid-area: book;
`;

const Center = styled.div`
  text-align: center;
`;

function Book() {
  return (
    <Section>
      <h2>The Book</h2>
      <Center>
        <Image
          source={frontWebp}
          fallback={frontPng}
          alt="The Art of Micro Frontends Book Cover"
          width={250}
          height={371}
        />
      </Center>
      <Intro>With "The Art of Micro Frontends" you'll scale your frontend to new dimensions.</Intro>
      <p>
        Using my book you will be able to create basic implementations using all of the popular architecture patterns.
        You will also learn when micro frontends make sense and when you should fall back to other solutions.
      </p>
      <p>
        In theory you can implement micro frontends with nearly every programming language and framework. The book
        chooses JavaScript as a single technology to make it as accessible as possible. Nevertheless, you should still
        be quite familiar with JavaScript as a language and its ecosystem - including Node.js to run scripts and set up
        some simple express server.
      </p>
    </Section>
  );
}

export default Book;
