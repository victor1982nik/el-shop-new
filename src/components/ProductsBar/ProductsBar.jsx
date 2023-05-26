import { Box } from "../Box/Box";
import { Img, Item, List, Title } from "./ProductsBar.styled";
import { useContext } from "react";
import { Context } from "../../context";

export const ProductsBar = ({ dishes }) => {
  const { setCart } = useContext(Context);
  //console.log(dishes);
  //if (activeshop) return;
  //const { dishes } = activeshop;
  const handleClick = (dish) => {
    dish.qwantity=1;
    setCart((s) => [...s, dish]);
  };
  return (
    <>
      <Box bg="violet" width="70%">
        {!dishes ? (
          <p>Выберите магазин</p>
        ) : (
          <>
            <Title>Dishes</Title>
            <List>
              {dishes.map((dish) => (
                <Item key={dish._id}>
                  <Img src={dish.img} alt={dish.name} />
                  <p>Dish: {dish.name}</p>
                  <p>Price: {dish.price}</p>
                  <button onClick={() => handleClick(dish)}>Add to cart</button>
                </Item>
              ))}
            </List>
          </>
        )}
      </Box>
    </>
  );
};
