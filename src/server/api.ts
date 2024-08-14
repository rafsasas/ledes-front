import {
  InstituicaoEstrangeiraBody,
  InstituicaoBrasileiraBody,
} from "../model/instituition";

const API_BASE_URL = "http://localhost:3000";

export async function CreateInstitution(
  body: InstituicaoEstrangeiraBody
): Promise<Response> {
  try {
    const response = await fetch(`${API_BASE_URL}/cadastrar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response;
  } catch (error) {
    console.error("Erro ao criar instituição:", error);
    throw error;
  }
}

export async function ListInstitution(): Promise<{
  instituicaoBrasileira: InstituicaoBrasileiraBody[];
  instituicaoEstrangeira: InstituicaoEstrangeiraBody[];
}> {
  try {
    const response = await fetch(`${API_BASE_URL}/buscar`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      const data = await response.json();

      return {
        instituicaoBrasileira: data.instituicoes.instituicaoBrasileira || [],
        instituicaoEstrangeira: data.instituicoes.instituicaoEstrangeira || [],
      };
    } else {
      throw new Error("Erro ao listar instituições");
    }
  } catch (error) {
    console.error("Erro ao listar instituições:", error);
    throw error;
  }
}
