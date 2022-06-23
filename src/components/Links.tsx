import * as React from 'react';
import styled from 'styled-components';
import links from '../data/links';

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
  grid-area: links;
`;

function Links() {
  return (
    <Section>
      <h2>Links</h2>
      <List>
        {links.map((link, i) => (
          <ListItem key={i}>
            <a href={link.url} rel="noopener" target="_blank">
              {link.title}
            </a>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

export default Links;
