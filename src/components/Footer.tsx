import * as React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  padding: 2.5rem;
  background: #efefef;
  border-top: 1px solid #aaa;
  grid-column: 1 / 4;
`;

const Copyright = styled.div`
  margin-top: 1rem;
  text-align: center;
  color: #aaa;
  margin-bottom: 0;
`;

function Footer() {
  return (
    <Container>
      <Copyright>
        Florian Rappl © {new Date().getFullYear()}{' '}&middot;{' '}
        <a href="https://florian-rappl.de/Misc/Page/68/about" rel="noopener" target="_blank">
          Imprint
        </a>
      </Copyright>
    </Container>
  );
}

export default Footer;
