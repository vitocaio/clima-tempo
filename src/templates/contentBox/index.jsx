import React from 'react';
import styled from 'styled-components';

const Contentbox = styled.div`
  width: 100%;
  height: 250px;
  margin-top: 20px;
  padding: 60px;
  background: ${props => props.theme.colorWhite};
  border-radius: 5px;
  box-shadow: 3px 3px 10px ${props => props.theme.colorDarkGolden};
`;

export default (props) => (
    <Contentbox>
        {props.children}
    </Contentbox>
)
