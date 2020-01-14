import React from 'react';
import styled from 'styled-components';

const Alink = styled.a`
  text-transform: uppercase;
  color: ${props => props.theme.colorWhite};
    :hover {
      cursor: pointer;
      color: ${props => props.theme.colorWhite};
      text-decoration: none;
    }
`;

function Link ({
  ...props
})
{
  return ( 
    <Alink {...props}> voltar </Alink>
  )
}

export default Link;
