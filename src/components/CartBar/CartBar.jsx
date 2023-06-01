import { Box } from "../Box/Box";
import { CartItem } from "../CardItem/CardItem";
import { List, Item, Text, Button, InnerText, Hero } from "./CartBar.styled";
import { useContext } from "react";
import { Context } from "../../context";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const CartBar = ({ resetUser, sendOrder }) => {
  const { cart: dishes } = useContext(Context);

  const handleClick = () => {
    sendOrder(totalprice);
  };

  const totalprice = dishes.reduce((acc, item) => {
    return acc + item.price * item.qwantity;
  }, 0);

  return (
    <Box width="75%" border="1px solid black" borderRadius="8px">
      {!dishes.length ? (
        <>
          <Text>Cart is empty</Text>
          <Box textAlign="center">
            <Hero
              src={backendUrl + "/dishes/cart.jpg"}
              alt="choose restaurant"
            />
          </Box>
        </>
      ) : (
        <>
          <List>
            {dishes.map((dish) => (
              <Item key={dish._id}>
                <CartItem dish={dish} />
              </Item>
            ))}
          </List>
          <Text>
            Total: <InnerText>{totalprice} UAH</InnerText>
          </Text>
          <Box display="flex" justifyContent="center">
            <Button onClick={handleClick}>Send Order</Button>
          </Box>
        </>
      )}
    </Box>
  );
};
