import React from 'react';
import styled from 'styled-components';

const Result = styled.div`
  padding-top: 20px;
`;

const Temperature = styled.div`
  padding: 7px 40px;
  height: 80px;
  border-right: 1px solid ${props => props.theme.colorOrange01};
`;

const DescTemperature = styled.div`
  padding: 30px 40px;
  height: 80px;
`;

const StyledH3 = styled.span`
  color: ${props => props.theme.colorGray08};
  font-size: 50px;
`;

const StyledParagraph = styled.p`
  color: ${props => props.theme.colorGray08};
`;

export default (props) => (
  <Result className="row">
    <Temperature className="col-xs-4">
      <StyledH3> { props.temp } </StyledH3>
    </Temperature>
    <DescTemperature className="col-xs-8">
      <StyledParagraph> { props.descTemp } </StyledParagraph>
    </DescTemperature>
  </Result>
)

