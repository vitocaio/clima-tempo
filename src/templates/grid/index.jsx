import React from 'react';
import styled from 'styled-components';

function toCssClasses(numbers = '12') {
  const cols = numbers ? numbers.split(' ') : [];
  let classes = '';

  if (cols[0]) classes += `col-xs-${cols[0]}`;
  if (cols[1]) classes += ` col-sm-${cols[1]}`;
  if (cols[2]) classes += ` col-md-${cols[2]}`;
  if (cols[3]) classes += ` col-lg-${cols[3]}`;
  return classes;
}

const StyledGrid = styled.div`
${props => props.align && `
  text-align: ${props.align};
`}
`;
const Grid = ({ children, cols, ...props }) => (
  <StyledGrid className={toCssClasses(cols)} {...props}>
    {children}
  </StyledGrid>
);

export default Grid;
