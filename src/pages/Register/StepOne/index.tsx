import React, { useState, useEffect } from "react";
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import * as S from "./styles.ts";

interface StepOneProps {
  data: any;
  onChange: (data: any) => void;
}

const schema = {
  type: "object",
  properties: {
    nome: { type: "string", title: "Name" },
    sigla: { type: "string", title: "Sigla" },
    cnpj: { type: "string", title: "CNPJ" },
  },
};

const uischema = {
  type: "VerticalLayout",
  elements: [
    { type: "Control", scope: "#/properties/nome" },
    { type: "Control", scope: "#/properties/sigla" },
    { type: "Control", scope: "#/properties/cnpj" },
  ],
};

const StepOne: React.FC<StepOneProps> = ({ data, onChange }) => {
  return (
    <S.Container>
      <S.ContainerForm>
        <JsonForms
          schema={schema}
          uischema={uischema}
          data={data}
          renderers={materialRenderers}
          cells={materialCells}
          onChange={({ data }) => onChange(data)}
        />
      </S.ContainerForm>
    </S.Container>
  );
};

export default StepOne;
