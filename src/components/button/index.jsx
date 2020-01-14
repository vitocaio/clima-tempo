import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  text-transform: uppercase;
  width: 100%;
  margin-top: 25px;
  padding: 10px;
  border-radius: 5px;
  color: ${props => props.theme.colorWhite};
  background: ${props => props.theme.colorOrange01};
    :hover {
      background: ${props => props.theme.colorOrange02};
    }
    :active {
      background: ${props => props.theme.colorOrange01};
    }
`;

function Button({
  ...props
}) {
  return (
    <StyledButton {...props}>
      {props.label}
    </StyledButton>
  )
}

export default Button;
