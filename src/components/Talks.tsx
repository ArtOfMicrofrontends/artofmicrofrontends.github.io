import * as React from 'react';
import styled from 'styled-components';
import LinkList from './LinkList';
import talks from '../data/talks';

const Section = styled.section`
  grid-area: talks;
`;

function Talks() {
  return (
    <Section>
      <h2>Talks</h2>
      <LinkList items={talks} />
    </Section>
  );
}

export default Talks;
