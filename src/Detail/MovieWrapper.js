import styled from 'styled-components';

const MovieWrapper = styled.div`
  position: relative;
  padding: 1.5rem;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

export default MovieWrapper;
