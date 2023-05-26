import { Box } from "../../components/Box/Box";
import { useContext, useState } from "react";
import { Context } from "../../context";
import UserBar from "../../components/UserBar/UserBar";
import { CartBar } from "../../components/CartBar/CartBar";
import { addOrder } from "../../components/api/api";
//import { addOrder } from "../../components/api/api";

const Cart = () => {
  const [user, setUser] = useState(null);
  const { setCart, cart, activeShop } = useContext(Context);
  //console.log("cart", cart);
  //console.log("user", user);

  const handleOrderSend = async (sum) => {
    //console.log("hadleordersend");
    const filteredcart = cart.map((item) => ({
      name: item.name,
      qwantity: Number(item.qwantity),
      price: item.price,
    }));
    //console.log("filtered", filteredcart);
    const data = {
      shopid: activeShop._id,
      user,
      order: filteredcart,
      total: sum,
    };
    const resp = await addOrder(data);
    console.log(resp);
    //console.log("data ready to send", data);
    setCart([]);
    setUser(null);
  };

  const handleUserChange = (data) => {
    setUser((s) => ({ ...s, ...data }));
  };

  return (
    <Box p={5} display="flex" justifyContent="center">
      <UserBar user={user} changeUser={handleUserChange} />
      <CartBar sendOrder={handleOrderSend} />
      {/* {!cart.length ? (
        <div>Корзина пуста</div>
      ) : (
        
        // <ul>
        //   {cart.map((item) => (
        //     <li key={item._id}></li>
        //   ))}
        // </ul>
      )} */}
    </Box>
  );
};

export default Cart;
