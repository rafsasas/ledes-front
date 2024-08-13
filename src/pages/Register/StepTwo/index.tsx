import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import * as S from './styles.ts';

const schema = {
  type: 'object',
  properties: {
    cep: {type: 'string', title: 'CNJP'},
    state: {type: 'string', title: 'Estado'},
    logradouro: {type: 'string', title: 'Logradouro'},
    number: {type: 'string', title: 'Número'},
    country: {type: 'string', title: 'País'},
    city: {type: 'string', title: 'Município'},
    neighborhood: {type: 'string', title: 'Bairro'},
    complement: {type: 'string', title: 'Complemento'}
  },
  required: ['cep' , 'state', 'logradouro', 'number', 'country', 'city', 'neighborhood', 'complement']
};

const uischema = {
  type: 'VerticalLayout',
  elements: [
    { type: 'Control', scope: '#/properties/cep'},
    { type: 'Control', scope: '#/properties/state' },
    { type: 'Control', scope: '#/properties/logradouro' },
    { type: 'Control', scope: '#/properties/number' },
    { type: 'Control', scope: '#/properties/country' },
    { type: 'Control', scope: '#/properties/city' },
    { type: 'Control', scope: '#/properties/neighborhood' },
    { type: 'Control', scope: '#/properties/complement' },
  ]
};

const StepTwo = () => {
  const [data, setData] = useState({});

  return (
    <S.Container>
        <S.ContainerForm>
            <JsonForms
              schema={schema}
              uischema={uischema}
              data={data}
              renderers={materialRenderers}
              cells={materialCells}
              onChange={({ data }) => setData(data)}
            />
        </S.ContainerForm>
    </S.Container>
  );
};

export default StepTwo;