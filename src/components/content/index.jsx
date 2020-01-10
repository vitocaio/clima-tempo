import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  width: 50%;
  height: auto;
  min-height: 400px;
  margin: 200px auto;
  position: relative;
`;

export default (props) => (
  <Content>
    {props.children}
  </Content>
)