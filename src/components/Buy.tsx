import * as React from 'react';
import styled from 'styled-components';
import Image from './Image';
import amazonPng from '../assets/amazon-de.png';
import amazonWebp from '../assets/amazon-de.webp';

const Background = styled.div`
  grid-area: buy;
  width: 100%;
  text-align: center;
`;

function Buy() {
  return (
    <Background>
      <a href="https://www.amazon.de/dp/1800563566/" rel="noopener" target="_blank">
        <Image
          source={amazonPng}
          fallback={amazonWebp}
          alt="The Art of Micro Frontends Book Amazon Reviews"
          width={839}
          height={286}
        />
      </a>
    </Background>
  );
}

export default Buy;
