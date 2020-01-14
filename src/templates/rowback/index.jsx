import React from 'react';
import styled from 'styled-components';

const StyledRowback = styled.div`
  padding: 30px 70px;
  display: ${props => (props.show ? 'none' : 'block')};
`;

const Rowback = ({
  ...props
}) => (
  <StyledRowback show={props.hide}>
    { props.children }
  </StyledRowback>
);

export default Rowback;
