import { Img, Input } from "./CardItem.styled";
import { useContext } from "react";
import { Context } from "../../context";

export const CartItem = ({ dish }) => {
  const { setCart, cart } = useContext(Context);

  const handleChange = (e) => {
    const qwantity = e.target.value;
    const idx = cart.findIndex((item) => item._id === dish._id);
    const updatedDish = { ...cart[idx], qwantity };
    const updatedCart = [...cart];
    updatedCart[idx] = updatedDish;
    setCart(updatedCart);
  };

  return (
    <>
      <Img src={dish.img} alt={dish.name} />
      <p>Dish: {dish.name}</p> <p>Price: {dish.price}</p>
      {/* <button onClick={() => handleClick(dish)}>Add to cart</button> */}
      <form>
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
      </form>
      <p>Total: {dish.price * dish.qwantity}</p>
    </>
  );
};
