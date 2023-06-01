import { Box } from "../../components/Box/Box";
import { useContext, useState } from "react";
import { Context } from "../../context";
import UserBar from "../../components/UserBar/UserBar";
import { CartBar } from "../../components/CartBar/CartBar";
import { addOrder } from "../../components/api/api";
import { toast } from "react-toastify";

const Cart = () => {
  const [user, setUser] = useState(null);
  const { setCart, cart, activeShop } = useContext(Context);

  const handleOrderSend = async (sum) => {
    if (
      !user ||
      user.name === "" ||
      user.email === "" ||
      user.phone === "" ||
      user.address === ""
    ) {
      toast.error("Fill userdata");
      return;
    }

    const filteredcart = cart.map((item) => ({
      name: item.name,
      qwantity: Number(item.qwantity),
      price: item.price,
    }));

    const data = {
      shopid: activeShop._id,
      user,
      order: filteredcart,
      total: sum,
    };
    const resp = await addOrder(data);
    if (resp) {
      toast.success("Order submited");
    }
    setCart([]);
    setUser(null);
  };

  const handleUserChange = (data) => {
    setUser((s) => ({ ...s, ...data }));
  };

  return (
    <Box p={5} display="flex" justifyContent="center" alignItems="stretch">
      <UserBar user={user} changeUser={handleUserChange} />
      <CartBar sendOrder={handleOrderSend} />
    </Box>
  );
};

export default Cart;
