import styled from "styled-components";

interface IconProps {
  isActive: boolean;
}

export const BackButton = styled.button`
  position: absolute;
  top: 2%;
  left: 2%;
  background-color: transparent;
  border: none;
  color: #00008e;
  font-size: 15px;
  z-index: 10;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #3498db;
  text-align: center;
  margin: 20px 0;
  font-weight: normal;
  color: #000000;
`;

export const HeaderForm = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  background-color: #ffffff;
  padding: 20px;
  flex: 1;
`;

export const ContainerIconInstitution = styled.div<IconProps>`
  background-color: ${(props) => (props.isActive ? "#0080ff" : "#dddcdc")};
  width: 40px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerIconAdress = styled.div<IconProps>`
  background-color: ${(props) => (props.isActive ? "#0080ff" : "#dddcdc")};
  width: 40px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RowItem = styled.div`
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const ContainerForm = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 5%;
`;

export const FootIcon = styled.img`
  width: 50px;
  height: 50px;
  fill: #0000ff;
  margin-right: 10px;
`;

export const TextIcon = styled.p`
  margin-left: 10px;
  font-size: 14px;
  color: #3498db;
  text-align: center;
  font-weight: normal;
  color: #000000;
`;

export const BackStepButton = styled.button`
  width: 80px;
  height: 30px;
  background-color: #dddcdc;
  border: none;
  color: #000000;
  font-size: 15px;
  margin-right: 10px;
  cursor: pointer;

  &: hover {
    background-color: #c6c5c5;
  }
`;

export const NextStepButton = styled.button`
  width: 80px;
  height: 30px;
  color: white;
  border: none;
  background-color: #0080ff;
  font-size: 15px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #006bb3;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: absolute;
  right: 2%;
  bottom: 2%;
`;

export const Divider = styled.div`
  width: 20px;
  height: 1.5px;
  background-color: #000000;
  margin: 0 10px;
`;
