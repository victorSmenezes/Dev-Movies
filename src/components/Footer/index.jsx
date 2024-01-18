import React from 'react';

import { Container, GitHub, Linkedin, Nav } from './styles';

export default function Footer() {
  return (
    <>
      <Container>
        <Nav>
          <p>Desenvolvido por &copy; Victor Santos</p>

          <p>
            <a
              href="https://www.linkedin.com/in/victor-santos-de-menezes/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>

            <a
              href="https://github.com/victorSmenezes"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
          </p>
        </Nav>
      </Container>
    </>
  );
}
