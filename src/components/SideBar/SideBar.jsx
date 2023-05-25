import { Box } from "../Box/Box";
import { List, Item, Title } from "./SideBar.styled";

export const SideBar = ({ shops, activeshop, OnClick }) => {
  //console.log("shops", shops);
  return (
    <>
      <Box bg="tomato" width="30%" height="500px">
        <Title>Restaurants</Title>
        <List>
          {shops.map((shop) => (
            <Item
              key={shop._id}
              selected={activeshop?._id === shop._id}
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
