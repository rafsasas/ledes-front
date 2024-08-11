import styled from 'styled-components';

export const BackButton = styled.button`
  position: absolute;
  top: 2%;
  left: 2%;
  background-color: transparent;
  border: none;
  color: #00008e;
  font-size: 15px;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 100%
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  background-color: #f4f4f4;
`;

export const Box = styled.div`
  width: 80%;
  padding: 5%;
  margin-top: 20px;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 0;
  
`;

export const TextHeader = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  font-family: Arial, sans-serif;
`;

export const ButtonHeader = styled.button`
background-color: #ffffff;
  padding: 0.5px 1px;
  color: #006b00;
  border: 0px solid;
  border-radius: 3px;
  cursor: pointer;
  font-size: 18px;
  font-family: Arial, sans-serif;
`;

export const Table = styled.div`
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
`;

export const TableHeader = styled.div`
  display: flex;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  padding: 10px 0;
  font-family: Arial, sans-serif;
`;

export const HeaderItem = styled.div`
  flex: 1;
  padding: 10px;
  text-align: left;
  font-family: Arial, sans-serif;
`;

export const TableRow = styled.div`
  display: flex;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
font-family: Arial, sans-serif;
`;

export const RowItem = styled.div`
  flex: 1;
  padding: 10px;
  text-align: left;
`;

export const ActionButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 5px;
  font-family: Arial, sans-serif;
`;