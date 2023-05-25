import { Box } from "../Box/Box";
import { List } from "./SideBar.styled";

export const SideBar = ({ shops }) => {
  return (
    <>
      <Box bg="tomato" width="30%" height="500px">
        <List>
          SideBar
          {/* {shops.map((shop) => (
            <li key={shop.id}>{shop.name}</li>
          ))} */}
        </List>
      </Box>
    </>
  );
};
