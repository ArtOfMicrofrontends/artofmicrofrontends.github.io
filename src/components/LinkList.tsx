import * as React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 0.5rem 0;
  font-size: 1rem;
`;

interface LinkListProps {
  items: Array<{
    url: string;
    title: string;
  }>;
}

function LinkList({ items }: LinkListProps) {
  return (
    <List>
      {items.map((item, i) => (
        <ListItem key={i}>
          <a href={item.url} rel="noopener" target="_blank">
            {item.title}
          </a>
        </ListItem>
      ))}
    </List>
  );
}

export default LinkList;
