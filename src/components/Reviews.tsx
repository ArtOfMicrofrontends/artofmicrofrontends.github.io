import * as React from 'react';
import styled from 'styled-components';
import Image from './Image';
import reviewsPng from '../assets/reviews.png';
import reviewsWebp from '../assets/reviews.webp';

const Background = styled.div`
  grid-area: reviews;
  width: 100%;
  text-align: center;
`;

function Reviews() {
  return (
    <Background>
      <a href="https://www.amazon.com/dp/1800563566/" rel="noopener" target="_blank">
        <Image
          source={reviewsPng}
          fallback={reviewsWebp}
          alt="The Art of Micro Frontends Book Amazon Review Details"
          width={600}
          height={497}
        />
      </a>
    </Background>
  );
}

export default Reviews;
