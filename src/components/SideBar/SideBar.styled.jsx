import styled from "@emotion/styled";

export const Title = styled.h2`
  text-align: center;
`;

export const List = styled.ul`
  padding: 20px;
  text-align: center;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px;
  padding: 4px 2px 5px;

  font-size: 20px;
  cursor: pointer;
  border-radius: 8px;
  background: ${(props) => (props.selected ? "lightgreen" : "blue")};

  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;
