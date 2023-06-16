import styled from "@emotion/styled";

export const Img = styled.img`
  display: block;
  width: 250px;
  height: 160px;
  border-bottom: 1px solid black;
  border-radius: 8px;
`;

export const Input = styled.input`
  width: 30px;
  margin-left: 5px;
  font-size: 14px;
  font-weight: 500;
`;

export const Text = styled.p`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
`;

export const Form = styled.form`
  display: flex;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  gap: 5px;
`;

export const ButtonCounter = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;
  width: 30px;
  height: 25px;

  font-family: inherit;
  font-weight: 600;
  font-size: 20px;

  color: ${(props) => props.theme.colors.darkSecondary};
  background-color: transparent;
  border-radius: 5px;

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.accent};
  }
`;
