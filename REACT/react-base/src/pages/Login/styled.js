import styled from 'styled-components';

export const Title = styled.h1`
  background: ${(props) => (props.isRed ? 'red' : 'blue')};
`;
