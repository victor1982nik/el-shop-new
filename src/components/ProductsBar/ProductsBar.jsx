import { Box } from "../Box/Box";
import { List } from "./ProductsBar.styled";

export const ProductsBar = ({ dishes }) => {
  return (
    <>
      <Box bg="violet" width="70%">
        <List>
          ProductsBar
          {/* {shops.map((shop) => (
              <li key={shop.id}>{shop.name}</li>
            ))} */}
        </List>
      </Box>
    </>
  );
};
