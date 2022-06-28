import * as React from 'react';
import styled from 'styled-components';
import Cover from './Cover';

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 4rem;
  color: white;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-image: linear-gradient(135deg, #0e73cc 1.93%, #624bbb 14.86%, #ff455d 48.09%, #f35815 77.82%, #f2b600 97.3%);
`;

function Header() {
  return (
    <>
      <Cover />
      <Title>The Art of Micro Frontends</Title>
    </>
  );
}

export default Header;
