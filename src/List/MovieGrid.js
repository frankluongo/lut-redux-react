import styled from 'styled-components';

const MovieGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1.5rem;
  justify-items: center;
  padding: 1.5rem;
`;

export default MovieGrid
