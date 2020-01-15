import React from 'react'; 
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  border: solid 1px ${props => props.theme.colorGray06};
  border-radius: 5px;
  height: 40px;
  padding: 10px 25px;
  color: ${props => props.theme.colorGray04};
  font-weight: bold;
`;

const Input = ({
  ...props
}) => (
  <StyledInput placeholder={props.placeholder} {...props} />
)

export default Input;
