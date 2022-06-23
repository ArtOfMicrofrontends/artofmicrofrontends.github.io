import * as React from 'react';
import styled from 'styled-components';
import articles from '../data/articles';

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
  grid-area: articles;
`;

function Articles() {
  return (
    <Section>
      <h2>Articles</h2>
      <List>
        {articles.map((article, i) => (
          <ListItem key={i}>
            <a href={article.url} rel="noopener" target="_blank">
              {article.title}
            </a>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

export default Articles;
