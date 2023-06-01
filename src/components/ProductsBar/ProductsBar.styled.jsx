import styled from "@emotion/styled";

export const MainTitle = styled.h1`
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Title = styled.h2`
  text-align: center;
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

export const Img = styled.img`
  display: block;
  width: 250px;
  height: 160px;
  border-bottom: 1px solid black;
  border-radius: 8px;
`;
export const Hero = styled.img`
  max-width: 50%;
`;

export const Text = styled.p`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
`;

export const InnerText = styled.span`
  font-weight: 500;
  font-size: 18px;
`;

export const Button = styled.button`
  margin-top: 5px;
  padding: 4px 16px;
  border-radius: 4px;
  background: blue;
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    background: lightblue;
    color: black;
  }
`;
