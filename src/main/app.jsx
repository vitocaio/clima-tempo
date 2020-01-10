import React from 'react';
import styled from 'styled-components';

import Content from '../components/content';
import Title from '../components/title';
import Input from '../components/input';
import Button from '../components/button';
// import Row from '../templates/row';
// import Col from '../templates/col';

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

function renderForm() {
  return (
    <div>
      <Input placeholder="Digite a sua cidade"/>
      <Button label="buscar"/>
    </div>
  )
}

// function renderShowClima() {
//   return (
//     <div>
//       <Row>
//         <Col>
//         </Col>
//         <Col>
//         </Col>
//       </Row>
//     </div>
//   )
// }

export default () => (
  <Content>
    <Title title="tempo agora" />
    <Contentbox>
      { renderForm() }
    </Contentbox>
  </Content>
);
