import styled from 'styled-components';

const MovieWrapper = styled.div`
  position: relative;

  align-items: center;
  display: flex;
  justify-content: center;

  min-height: 100vh;
  padding: 1.5rem;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

export default MovieWrapper;
