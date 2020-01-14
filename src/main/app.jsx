import React, { useState } from 'react';

import Content from '../components/content';
import Title from '../components/title';
import Input from '../components/input';
import Button from '../components/button';
import Link from '../components/link';

import Contentbox from '../templates/contentBox';
import Description from '../templates/description';
import Result from '../templates/result';
import Rowback from '../templates/rowback';
import Row from '../templates/row';
import Grid from '../templates/grid';

function App() {
  const [tempoAgora, setTempoAgora] = useState(true);

  return (
    <Content>
      <Title title="tempo agora" />
      <Contentbox>
        {tempoAgora ? (
          <Row>
            <Grid cols="12 12 12 12">
              <Input placeholder="Digite a sua cidade"/>
              <Button label="buscar" onClick={ () => setTempoAgora(false) } />
            </Grid>
          </Row>
        ) : (
          <div>
            <Description />
            <Result temp="30" descTemp="Calor" />
          </div>
        )}
      </Contentbox>
      <Rowback hide={tempoAgora}>
        <Link onClick={() => setTempoAgora(true)}/>
      </Rowback>
    </Content>
  )
}

export default App;
