import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';

const StyledHeader = styled.header`
  left: 0;
  position: fixed;
  top: 0;
  z-index: 999;

  padding-bottom: 2rem;
  padding-top: 2rem;
  width: 100%;

  text-align: center;

  background-color: rgba(255,255,255,0.35);
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Link to="/">
          Home
        </Link>
      </Container>
    </StyledHeader>
  )
}

export default Header
