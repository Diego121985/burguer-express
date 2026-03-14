import styled from "styled-components";

export const AdminLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px; /* tabela grande | form menor */
  gap: 24px;
  height: calc(100vh - 120px);
  padding: 34px  40px;
  margin-top: 80px;
  

  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
  }
`;

/* ===== FORM ===== */

export const Form = styled.form`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const Input = styled.input`
  width: 100%;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
font-size: 14px;
  &:focus {
    border-color: #22c55e;
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  grid-column: span 2;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: none;
  min-height: 100px;

  &:focus {
    border-color: #22c55e;
    outline: none;
  }
`;

export const Select = styled.select`
  grid-column: span 2;
  padding: 5px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  grid-column: span 2;
  padding: 3px;

  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #6e716f;
  }
  &:active {
    
  }
`;


/* ===== TABELA ===== */

export const TableWrapper = styled.div`
    height: 100%;
  overflow-y: auto;
  border-radius: 8px;

  h1 {
    color: white;
   
  }
`;

export const ProductList = styled.table`
  width: 100%;
  background: #000;
  color: #fff;
  border-radius: 8px;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background: #f7f4f4;
  color: black;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const Th = styled.th`
  padding: 12px;
  font-weight: 600;
  text-align: left;
`;

export const Td = styled.td`
  padding: 12px;
  vertical-align: middle;

  &:last-child {
    text-align: center;
    width: 80px;
  }
`;

export const ProductItem = styled.tr`
  border-bottom: 1px solid #333;

  &:hover {
    background: #1a1a1a;
  }
`;


export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding-left: 8px;
  
`;
