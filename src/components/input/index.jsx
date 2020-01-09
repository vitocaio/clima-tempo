import React from 'react'; 
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  border: solid 1px ${props => props.theme.colorGray06};
  border-radius: 5px;
  height: 40px;
  padding: 10px 25px;
  color: ${props => props.theme.colorGray04};
  font-weight: bold;
`;

export default (props) => (
  <Input placeholder={props.placeholder} />
)