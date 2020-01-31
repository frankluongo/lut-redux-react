import styled from 'styled-components';

const MovieGrid = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  padding: 8rem 0;

  a {
    display: block;
    width: 100%;
  }

  img {
    display: block;
    max-width: 100%;
    width: 100%;
  }
`;

export default MovieGrid
