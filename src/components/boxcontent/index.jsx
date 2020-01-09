import React from 'react';
import styled from 'styled-components';

import Title from '../title';
import Input from '../input';
import Button from '../button';

const Content = styled.div`
  width: 50%;
  height: auto;
  min-height: 400px;
  margin: 200px auto;
  position: relative;
`;

const Contentbox = styled.div`
  width: 100%;
  height: 230px;
  margin-top: 20px;
  padding: 70px;
  background: ${props => props.theme.colorWhite};
  position: absolute;
  border-radius: 5px;
  box-shadow: 3px 3px 10px ${props => props.theme.colorDarkGolden};
`;

export default () => (
  <Content>
    <Title title="tempo agora" />
    <Contentbox>
      <Input placeholder="Digite a sua cidade"/>
      <Button label="buscar"/>
    </Contentbox>
  </Content>
);
