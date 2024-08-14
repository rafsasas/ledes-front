export interface InstituicaoEstrangeiraBody {
  id: string;
  nome: string | null;
  sigla: string | null;
  pais: string | null;
  cep: string | null;
  logradouro: string | null;
  estado: string | null;
  municipio: string | null;
  complemento: string | null;
  situacao: string | null;
}

export interface InstituicaoBrasileiraBody {
  id: string;
  nome: string | null;
  sigla: string | null;
  pais: string | null;
  cnpj: string | null;
  cep: string | null;
  logradouro: string | null;
  bairro: string | null;
  estado: string | null;
  municipio: string | null;
  numero: number | null;
  complemento: string | null;
  situacao: string | null;
}
