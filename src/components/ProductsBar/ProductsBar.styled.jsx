import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Item = styled.li`
  width: 200px;
  height: 300px;

  border: 1px solid black;
  border-radius: 8px;
`;

export const Img = styled.img`
  display: block;
  width: 200px;
  height: 200px;
  border-bottom: 1px solid black;
  border-radius: 8px;
`;
