import { Box } from "../../components/Box/Box";
import { useContext } from "react";
import { Context } from "../../context";
import UserBar from "../../components/UserBar/UserBar";
//import { addOrder } from "../../components/api/api";

const Cart = () => {
  const { cart } = useContext(Context);
  console.log(cart);
  return (
    <Box p={5} display="flex" justifyContent="center">
      <UserBar />
      {!cart.length ? (
        <div>Корзина пуста</div>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item._id}></li>
          ))}
        </ul>
      )}
    </Box>
  );
};

export default Cart;
