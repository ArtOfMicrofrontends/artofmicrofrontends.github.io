import * as React from 'react';
import styled from 'styled-components';
import LinkList from './LinkList';
import links from '../data/links';

const Section = styled.section`
  grid-area: links;
`;

function Links() {
  return (
    <Section>
      <h2>Links</h2>
      <LinkList items={links} />
    </Section>
  );
}

export default Links;
