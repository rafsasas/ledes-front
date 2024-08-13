import React, { useState } from "react";
import * as S from "./styles";
import { Footprints } from "lucide-react";
import StepOne from "./StepOne/index.tsx";
import StepTwo from "./StepTwo/index.tsx";

const Register: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const renderStepContent = (step: number): JSX.Element | null => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      default:
        return null;
    }
  };

  return (
    <S.Container>
      <S.BackButton onClick={() => alert("Voltar clicado!")}>
        ← Voltar
      </S.BackButton>
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
        <S.NextStepButton onClick={() => step !== 2 && setStep(step + 1)}>
          {step === 2 ? "Finalizar" : "Próximo"}
        </S.NextStepButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Register;
