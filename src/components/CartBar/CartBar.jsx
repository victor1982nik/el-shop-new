import { Box } from "../Box/Box";
import { CartItem } from "../CardItem/CardItem";
import { List, Item, Title, Button } from "./CartBar.styled";
import { useContext } from "react";
import { Context } from "../../context";

export const CartBar = ({ resetUser, sendOrder }) => {
  const { cart: dishes } = useContext(Context);
  //console.log("dishes", dishes);

  const handleClick = () => {
    //console.log("Send order");
    sendOrder(totalprice);
  };

  const totalprice = dishes.reduce((acc, item) => {
    return acc + item.price * item.qwantity;
  }, 0);

  return (
    <Box width="70%" border="1px solid black" borderRadius="8px">
      {!dishes.length ? (
        <div>Cart is empty</div>
      ) : (
        <>
          <List>
            {dishes.map((dish) => (
              <Item key={dish._id}>
                <CartItem dish={dish} />
              </Item>
            ))}
          </List>
          <Title>Total: {totalprice}</Title>
          <Box display="flex" justifyContent="center">
            <Button onClick={handleClick}>Send Order</Button>
          </Box>
        </>
      )}
    </Box>
  );
};
