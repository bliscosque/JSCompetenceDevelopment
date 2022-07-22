import React from 'react';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Oi</small>
      </Title>
      <p>Lorem ipsum dolot</p>
    </Container>
  );
}
