import React from 'react';
import { FAHome } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="/">
        {' '}
        <FAHome />
      </a>
      <a href="/">Teste</a>
    </Nav>
  );
}
