import { Form, Img, Input, Text } from "./CardItem.styled";
import { useContext } from "react";
import { Context } from "../../context";
import { Box } from "../Box/Box";
import { toast } from "react-toastify";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const CartItem = ({ dish }) => {
  const { setCart, cart } = useContext(Context);

  const handleChange = (e) => {
    const qwantity = e.target.value;
    if (qwantity <= 0) {
      toast.error("Enter positive value");
      return;
    }
    const idx = cart.findIndex((item) => item._id === dish._id);
    const updatedDish = { ...cart[idx], qwantity };
    const updatedCart = [...cart];
    updatedCart[idx] = updatedDish;
    setCart(updatedCart);
  };

  return (
    <>
      <Img src={backendUrl + dish.image} alt={dish.name} />
      <Box p={4}>
        <Text>Dish: {dish.name}</Text> <Text>Price: {dish.price}</Text>
        <Form>
          <label htmlFor="qwantity">
            Qwantity:
            <Input
              type="number"
              name="qwantity"
              id="qwantity"
              defaultValue={dish.qwantity}
              onChange={handleChange}
            />
          </label>
        </Form>{" "}
        <Text>Total: {dish.price * dish.qwantity} UAH</Text>
      </Box>
    </>
  );
};
