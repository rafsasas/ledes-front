import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles.ts";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { CreateInstitution } from "../../server/api.ts";
import {
  InstituicaoEstrangeiraBody,
  InstituicaoBrasileiraBody,
} from "../../model/instituition.ts";
import { Footprints } from "lucide-react";

const Register: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<any>({});

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const handleSubmit = async () => {
    try {
      const response = await CreateInstitution(formData);
      if (response.ok) {
        console.log("Instituição criada com sucesso!");
        navigate("/");
      } else {
        console.error("Erro ao criar instituição:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao criar instituição:", error);
    }
  };

  const renderStepContent = (step: number): JSX.Element | null => {
    switch (step) {
      case 1:
        return (
          <StepOne data={formData} onChange={(data) => setFormData(data)} />
        );
      case 2:
        return (
          <StepTwo data={formData} onChange={(data) => setFormData(data)} />
        );
      default:
        return null;
    }
  };

  return (
    <S.Container>
      <S.BackButton onClick={handleBackClick}>← Voltar</S.BackButton>
      <S.HeaderForm>
        <S.Title>Instituição</S.Title>
        <S.RowItem>
          <S.ContainerIconInstitution isActive={step === 1}>
            <Footprints style={{ color: "white" }} />
          </S.ContainerIconInstitution>
          <S.TextIcon>Dados da Instituição</S.TextIcon>
          <S.Divider />
          <S.ContainerIconAdress isActive={step === 2}>
            <Footprints style={{ color: "white" }} />
          </S.ContainerIconAdress>
          <S.TextIcon>Endereço</S.TextIcon>
        </S.RowItem>
        <S.ContainerForm>{renderStepContent(step)}</S.ContainerForm>
      </S.HeaderForm>
      <S.ButtonContainer>
        <S.BackStepButton
          onClick={() => setStep(step - 1)}
          disabled={step === 1}
        >
          Anterior
        </S.BackStepButton>
        <S.NextStepButton
          onClick={() => {
            if (step === 2) {
              handleSubmit();
            } else {
              setStep(step + 1);
            }
          }}
        >
          {step === 2 ? "Finalizar" : "Próximo"}
        </S.NextStepButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Register;
