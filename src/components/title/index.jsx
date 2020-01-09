import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  text-transform: uppercase;
  letter-spacing: 1rem;
  text-align: center;
  color: ${props => props.theme.colorWhite};
`;

export default (props) => {
  return <Title>{props.title}</Title>
}