import * as React from 'react';
import styled from 'styled-components';
import books from '../assets/books.jpg';

const Intro = styled.p`
  font-size: 2rem;
`;

const Section = styled.section`
  grid-area: book;
`;

function Book() {
  return (
    <Section>
      <h2>About the Book</h2>
      <img src={books} alt="The book" width="1024" height="768" />
      <Intro>With "The Art of Micro Frontends" you'll be able to scale your frontend to new dimensions.</Intro>
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
