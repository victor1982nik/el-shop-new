import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;
  width: 25%;

  border: 1px solid #757575;
  border-radius: 10px;
  background-color: #f1feff;
  font-size: 20px;
`;

export const Label = styled.label`
  background-color: #848892;
  padding: 10px 30px 0px;
  border-radius: 4px;
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.14),
    0px 2px 3px rgba(0, 0, 0, 0.12);
`;

export const Title = styled.div`
  font-size: 20px;
`;

export const Input = styled.input`
  padding: 2px 4px;
  font-size: 16px;
  width: 100%;
  margin: 10px 0 30px 0;
`;
