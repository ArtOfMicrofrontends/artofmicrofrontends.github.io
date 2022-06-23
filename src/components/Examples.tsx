import * as React from 'react';
import styled from 'styled-components';
import LinkList from './LinkList';
import examples from '../data/examples';

const Section = styled.section`
  grid-area: examples;
`;

function Examples() {
  return (
    <Section>
      <h2>Examples</h2>
      <LinkList items={examples} />
    </Section>
  );
}

export default Examples;
