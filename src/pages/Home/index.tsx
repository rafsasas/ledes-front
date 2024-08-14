import React, { useEffect, useState } from "react";
import { Pencil, Ban, Eye } from "lucide-react";
import * as S from "./styles.ts";
import { useNavigate } from "react-router-dom";
import { ListInstitution } from "../../server/api.ts";
import {
  InstituicaoBrasileiraBody,
  InstituicaoEstrangeiraBody,
} from "../../model/instituition.ts";

type Institution = InstituicaoBrasileiraBody | InstituicaoEstrangeiraBody;

const Home = () => {
  const navigate = useNavigate();
  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        const data = await ListInstitution();
        const { instituicaoBrasileira, instituicaoEstrangeira } = data;
        const combinedInstitutions = [
          ...instituicaoBrasileira,
          ...instituicaoEstrangeira,
        ];
        setInstitutions(combinedInstitutions);
      } catch (error) {
        setError("Erro ao carregar instituições");
        console.error("Erro ao carregar instituições:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstitutions();
  }, []);

  const handleAddClick = () => {
    navigate("/register");
  };

  const handleViewClick = (id: string) => {
    navigate(`/view/${id}`);
  };

  const handleEditClick = (id: string) => {
    navigate(`/edit/${id}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <S.Container>
      <S.Box>
        <S.Header>
          <S.TextHeader>Instituição</S.TextHeader>
          <S.ButtonHeader onClick={handleAddClick}>+Adicionar</S.ButtonHeader>
        </S.Header>
        <S.Table>
          <S.TableHeader>
            <S.HeaderItem>Nome</S.HeaderItem>
            <S.HeaderItem>Sigla</S.HeaderItem>
            <S.HeaderItem>País</S.HeaderItem>
            <S.HeaderItem>Ações</S.HeaderItem>
          </S.TableHeader>
          {institutions.map((institution) => (
            <S.TableRow key={institution.id}>
              <S.RowItem>{institution.nome}</S.RowItem>
              <S.RowItem>{institution.sigla}</S.RowItem>
              <S.RowItem>{institution.pais}</S.RowItem>
              <S.RowItem>
                <S.Checkbox />
                <S.IconButton onClick={() => handleEditClick(institution.id)}>
                  <Pencil
                    style={{ width: "25px", height: "23px", color: "#007bff" }}
                  />
                </S.IconButton>
                <S.IconButton>
                  <Ban
                    style={{ width: "25px", height: "23px", color: "#ff0000" }}
                  />
                </S.IconButton>
                <S.IconButton onClick={() => handleViewClick(institution.id)}>
                  <Eye style={{ width: "28px", height: "25px" }} />
                </S.IconButton>
              </S.RowItem>
            </S.TableRow>
          ))}
        </S.Table>
      </S.Box>
    </S.Container>
  );
};

export default Home;
