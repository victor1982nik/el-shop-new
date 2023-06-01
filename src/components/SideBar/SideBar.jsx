import { Box } from "../Box/Box";
import { List, Item, Title } from "./SideBar.styled";
import { useContext } from "react";
import { Context } from "../../context";

export const SideBar = ({ shops, activeshop, OnClick }) => {
  const { cart } = useContext(Context);

  return (
    <>
      <Box bg="tomato" width="25%" borderRadius={5}>
        <Title>Restaurants</Title>
        <List>
          {shops.map((shop) => (
            <Item
              key={shop._id}
              selected={activeshop?._id === shop._id}
              disabled={
                activeshop?._id !== shop._id && cart.length > 0 ? true : null
              }
              onClick={() => OnClick(shop._id)}
            >
              {shop.name}
            </Item>
          ))}
        </List>
      </Box>
    </>
  );
};
