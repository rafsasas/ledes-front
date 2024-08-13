import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import * as S from './styles.ts';

const schema = {
  type: 'object',
  properties: {
    name: { type: 'string', title: 'Name' },
    acronym: { type: 'string', title: 'Sigla' },
    cnpj: {type: 'string', title: 'CNPJ'},
 },
  required: ['name', 'acronym', 'cnpj']
};

const uischema = {
  type: 'VerticalLayout',
  elements: [
    { type: 'Control', scope: '#/properties/name'},
    { type: 'Control', scope: '#/properties/acronym' },
    { type: 'Control', scope: '#/properties/cnpj' },
  ]
};

const StepOne = () => {
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

export default StepOne;