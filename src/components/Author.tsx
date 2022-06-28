import * as React from 'react';
import styled from 'styled-components';
import Image from './Image';
import portraitPng from '../assets/portrait.png';
import portraitWebp from '../assets/portrait.webp';

const Intro = styled.q`
  font-size: 2rem;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
`;

const Section = styled.section`
  grid-area: author;
`;

const Center = styled.div`
  text-align: center;
`;

function Author() {
  return (
    <Section>
      <h2>The Author</h2>
      <Center>
        <Image source={portraitWebp} fallback={portraitPng} alt="Florian Rappl" width={400} height={371} />
      </Center>
      <Intro>Hi, my name is Florian Rappl. I am a solution architect from Munich, Germany.</Intro>
      <p>
        I wrote "The Art of Micro Frontends" to help you master the foundations of micro frontends. In the last six
        years I've spent almost all of my time helping companies to successfully implement micro frontend solutions.
      </p>
      <p>
        The success stories and liberation that came by adopting micro frontends makes me a believer that - given the
        right circumstances - this solution does not only work, but is in fact the best way to truly scale a web
        application today.
      </p>
    </Section>
  );
}

export default Author;
