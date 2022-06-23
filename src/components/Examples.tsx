import * as React from 'react';
import styled from 'styled-components';
import examples from '../data/examples';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 0.5rem 0;
  font-size: 1rem;
`;

const Section = styled.section`
  grid-area: examples;
`;

function Examples() {
  return (
    <Section>
      <h2>Examples</h2>
      <List>
        {examples.map((example, i) => (
          <ListItem key={i}>
            <a href={example.url} rel="noopener" target="_blank">
              {example.title}
            </a>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

export default Examples;
