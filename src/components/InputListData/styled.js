import styled from "styled-components";

const InputTag = styled.input`
  background-color: white;
  box-sizing: border-box;
  min-width: 200px;
`;

const BtnTag = styled.button`
  background-color: blue;
  color: white;
  min-width: 100px;
  border-radius: 1px;
  border: 1px solid blue;
  margin: 5px;
`;
const FormTag = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export { InputTag, FormTag, BtnTag };
