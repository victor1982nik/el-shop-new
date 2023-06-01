import { Box } from "../Box/Box";
import {
  Button,
  Hero,
  Img,
  InnerText,
  Item,
  List,
  MainTitle,
  Text,
  Title,
} from "./ProductsBar.styled";
import { useContext } from "react";
import { Context } from "../../context";
import { toast } from "react-toastify";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const ProductsBar = ({ dishes }) => {
  const { setCart, cart } = useContext(Context);

  const handleClick = (dish) => {
    const isInCart = cart.find((item) => item.name === dish.name);
    if (isInCart) {
      toast.error("Already addded to cart");
      return;
    }
    dish.qwantity = 1;
    setCart((s) => [...s, dish]);
    toast.success(`Added to cart ${dish.name}`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <>
      <Box border="1px solid black" width="75%" borderRadius={5}>
        {!dishes ? (
          <>
            <MainTitle>Online food shop</MainTitle>
            <Title>Choose your shop</Title>
            <Box textAlign="center">
              <Hero
                src={backendUrl + "/dishes/chooseshop.jpg"}
                alt="choose restaurant"
              />
            </Box>
          </>
        ) : (
          <>
            <Title>Dishes</Title>
            <List>
              {dishes.map((dish) => (
                <Item key={dish._id}>
                  <Img src={backendUrl + dish.image} alt={dish.name} />
                  <Box p={4}>
                    <Text>
                      Dish: <InnerText>{dish.name}</InnerText>
                    </Text>
                    <Text>
                      Price: <InnerText>{dish.price} UAH</InnerText>
                    </Text>
                    <Button onClick={() => handleClick(dish)}>
                      Add to cart
                    </Button>
                  </Box>
                </Item>
              ))}
            </List>
          </>
        )}
      </Box>
    </>
  );
};
