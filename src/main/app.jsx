import React from 'react';
import styled from 'styled-components';

import Content from '../components/content';
import Title from '../components/title';
import Input from '../components/input';
import Button from '../components/button';
import Link from '../components/link';
import Row from '../templates/row';
import Grid from '../templates/grid';

const Contentbox = styled.div`
  width: 100%;
  height: 250px;
  margin-top: 20px;
  padding: 60px;
  background: ${props => props.theme.colorWhite};
  border-radius: 5px;
  box-shadow: 3px 3px 10px ${props => props.theme.colorDarkGolden};
`;

const Rowback = styled.div`
  padding: 30px 70px;
`;

function renderForm() {
  return (
    <Row>
      <Grid cols="12 12 12 12">
        <Input placeholder="Digite a sua cidade"/>
        <Button label="buscar"/>
      </Grid>
    </Row>
  )
}

function renderShowClima() {

  const Description = styled.div`
    border-bottom: solid 1px ${props => props.theme.colorOrange01};
    padding-bottom: 10px;
  `;

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

  const DescCity = styled.h4`
    color: ${props => props.theme.colorOrange01};
    font-weight: bold;
  `;

  const StyledH3 = styled.span`
    color: ${props => props.theme.colorGray08};
    font-size: 50px;
  `;

  const StyledParagraph = styled.p`
    color: ${props => props.theme.colorGray08};
  `;

  return (
    <div>
      <Description className="row">
        <Grid cols="12 12 12 12">
          <DescCity> São Paulo - Brasil </DescCity>
        </Grid>
      </Description>
      <Result className="row">
        <Temperature className="col-xs-4">
          <StyledH3> 40 </StyledH3>
        </Temperature>
        <DescTemperature className="col-xs-8">
          <StyledParagraph> teste </StyledParagraph>
        </DescTemperature>
      </Result>
    </div>
  )
}

export default () => (
  <Content>
    <Title title="tempo agora" />
    <Contentbox>
      { renderForm() }
    </Contentbox>
    <Rowback>
      <Link />
    </Rowback>
  </Content>
);
