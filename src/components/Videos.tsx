import * as React from 'react';
import styled from 'styled-components';
import LinkList from './LinkList';
import videos from '../data/videos';

const Section = styled.section`
  grid-area: videos;
`;

function Videos() {
  return (
    <Section>
      <h2>Videos</h2>
      <LinkList items={videos} />
    </Section>
  );
}

export default Videos;
