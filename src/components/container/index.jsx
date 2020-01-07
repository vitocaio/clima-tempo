import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: red; /* For browsers that do not support gradients */
  background-image: linear-gradient(to bottom right, red, yellow); /* Standard syntax (must be last) */
`;

export default (props) => {
  const {
    children,
  } = props;
  return (
    <Container>
      {children}
    </Container>
  )}