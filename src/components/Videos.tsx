import * as React from 'react';
import styled from 'styled-components';
import videos from '../data/videos';

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
  grid-area: videos;
`;

function Videos() {
  return (
    <Section>
      <h2>Videos</h2>
      <List>
        {videos.map((video, i) => (
          <ListItem key={i}>
            <a href={video.url} rel="noopener" target="_blank">
              {video.title}
            </a>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

export default Videos;
