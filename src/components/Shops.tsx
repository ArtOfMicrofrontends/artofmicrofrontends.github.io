import * as React from 'react';
import styled from 'styled-components';
import LinkList from './LinkList';
import shops from '../data/shops';

const Section = styled.section`
  grid-area: shops;
`;

function Shops() {
  return (
    <Section>
      <h2>Shops</h2>
      <LinkList items={shops} />
    </Section>
  );
}

export default Shops;
