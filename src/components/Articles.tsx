import * as React from 'react';
import styled from 'styled-components';
import LinkList from './LinkList';
import articles from '../data/articles';

const Section = styled.section`
  grid-area: articles;
`;

function Articles() {
  return (
    <Section>
      <h2>Articles</h2>
      <LinkList items={articles} />
    </Section>
  );
}

export default Articles;
