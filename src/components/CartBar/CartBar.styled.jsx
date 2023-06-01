import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
export const Title = styled.h2``;

export const Text = styled.p`
  margin-bottom: 30px;
  text-align: center;
  font-weight: 400;
  font-size: 30px;
`;

export const Hero = styled.img`
  max-width: 50%;
`;

export const InnerText = styled.span`
  font-weight: 500;
`;

export const Item = styled.li`
  width: 250px;
  height: 300px;

  border: 1px solid black;
  border-radius: 8px;
  &:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15),
      0px 5px 5px rgba(0, 0, 0, 0.14), 0px 6px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const Button = styled.button`
  margin-bottom: 20px;
  padding: 8px 16px;

  font-size: 20px;
  border-radius: 4px;
  cursor: pointer;
  background: blue;
  color: white;
  &:hover {
    background: lightblue;
    color: black;
  }
`;
