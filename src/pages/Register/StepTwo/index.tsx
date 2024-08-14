import React, { useState, useEffect } from "react";
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import * as S from "./styles.ts";

interface StepTwoProps {
  data: any;
  onChange: (data: any) => void;
}

const schema = {
  type: "object",
  properties: {
    cep: { type: "string", title: "CEP" },
    estado: { type: "string", title: "Estado" },
    logradouro: { type: "string", title: "Logradouro" },
    numero: { type: "number", title: "Número" },
    pais: {
      type: "string",
      title: "País",
      enum: [
        "Afeganistão",
        "África do Sul",
        "Albânia",
        "Algéria",
        "Alemanha",
        "Angola",
        "Arábia Saudita",
        "Argentina",
        "Austrália",
        "Áustria",
        "Bangladesh",
        "Bélgica",
        "Brasil",
        "Canadá",
        "Chile",
        "China",
        "Colômbia",
        "Coreia do Sul",
        "Croácia",
        "Cuba",
        "Dinamarca",
        "Egito",
        "Emirados Árabes Unidos",
        "Espanha",
        "Estados Unidos",
        "Etiópia",
        "Filipinas",
        "Finlândia",
        "França",
        "Gana",
        "Grécia",
        "Hungria",
        "Índia",
        "Indonésia",
        "Irã",
        "Irlanda",
        "Israel",
        "Itália",
        "Japão",
        "Malásia",
        "Marrocos",
        "México",
        "Moçambique",
        "Noruega",
        "Nova Zelândia",
        "Países Baixos",
        "Paquistão",
        "Peru",
        "Polônia",
        "Portugal",
        "Qatar",
        "Reino Unido",
        "República Tcheca",
        "Romênia",
        "Rússia",
        "Singapura",
        "Sudão",
        "Suécia",
        "Suíça",
        "Tailândia",
        "Turquia",
        "Ucrânia",
        "Venezuela",
        "Vietnã",
        "Zimbábue",
      ],
    },
    municipio: { type: "string", title: "Município" },
    bairro: { type: "string", title: "Bairro" },
    complemento: { type: "string", title: "Complemento" },
  },
};

const uischema = {
  type: "VerticalLayout",
  elements: [
    { type: "Control", scope: "#/properties/cep" },
    { type: "Control", scope: "#/properties/estado" },
    { type: "Control", scope: "#/properties/logradouro" },
    { type: "Control", scope: "#/properties/numero" },
    { type: "Control", scope: "#/properties/pais" },
    { type: "Control", scope: "#/properties/municipio" },
    { type: "Control", scope: "#/properties/bairro" },
    { type: "Control", scope: "#/properties/complemento" },
  ],
};

const StepTwo: React.FC<StepTwoProps> = ({ data, onChange }) => {
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

export default StepTwo;
