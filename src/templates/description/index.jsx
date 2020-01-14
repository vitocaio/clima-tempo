import React from 'react';
import styled from 'styled-components';

import Grid from '../grid';

const Description = styled.div`
  border-bottom: solid 1px ${props => props.theme.colorOrange01};
  padding-bottom: 10px;
`;

const DescCity = styled.h4`
  color: ${props => props.theme.colorOrange01};
  font-weight: bold;
`;

export default (props) => (
  <Description className="row">
    <Grid cols="12 12 12 12">
      <DescCity> São Paulo - Brasil </DescCity>
    </Grid>
  </Description>
)
