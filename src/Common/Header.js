import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;

  padding-bottom: 2rem;
  padding-top: 2rem;

  text-align: center;

  border-bottom: 1px solid #eee;
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
