import * as React from 'react';
import styled from 'styled-components';
import portrait from '../assets/portrait.png';

const Intro = styled.p`
  font-size: 2rem;
`;

const Section = styled.section`
  grid-area: author;
`;

function Author() {
  return (
    <Section>
      <h2>About the Author</h2>
      <img src={portrait} alt="Florian Rappl" width="400" height="371" />
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
