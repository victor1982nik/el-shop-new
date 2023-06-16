import { Form, Img, Text, ButtonCounter } from "./CardItem.styled";
import { useContext } from "react";
import { Context } from "../../context";
import { Box } from "../Box/Box";
import { toast } from "react-toastify";
import { RiAddFill } from "react-icons/ri";
import { HiMinus } from "react-icons/hi";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const CartItem = ({ dish }) => {
  const { setCart, cart } = useContext(Context);

  const handleChange = (e) => {
    let qwantity = dish.qwantity;
    qwantity =
      e.currentTarget.ariaLabel === "decrement"
        ? (qwantity -= 1)
        : (qwantity += 1);

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
      <Box p={3}>
        <Text>Dish: {dish.name}</Text> <Text>Price: {dish.price}</Text>
        <Form>
          Qwantity: {dish.qwantity}
          <ButtonCounter
            type="button"
            onClick={handleChange}
            aria-label="decrement"
          >
            <HiMinus />
          </ButtonCounter>
          <ButtonCounter
            type="button"
            onClick={handleChange}
            aria-label="increment"
          >
            <RiAddFill />
          </ButtonCounter>
        </Form>
        <Text>Total: {dish.price * dish.qwantity} UAH</Text>
      </Box>
    </>
  );
};
