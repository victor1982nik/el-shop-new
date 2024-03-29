import { useEffect, useState } from "react";
import { Box } from "../../components/Box/Box";
import { ProductsBar } from "../../components/ProductsBar/ProductsBar";
import { SideBar } from "../../components/SideBar/SideBar";
import { fetchShops } from "../../components/api/api";
import { Loader } from "../../components/Loader/Loader";
import { useContext } from "react";
import { Context } from "../../context";

const Home = () => {
  const [shops, setShops] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //const [activeShop, setActiveShop] = useState({});
  const { activeShop, setActiveShop } = useContext(Context);
  
  const getData = async () => {
    const resp = await fetchShops();
    if (!resp) {
      return;
    }
    setShops(resp);
  };

  useEffect(() => {
    try {
      setIsLoading(true);

      getData();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  //console.log(activeShop.dishes);
  const ActiveShopChanged = (id) => {
    const selectedShop = shops.filter((shop) => shop._id === id);
    setActiveShop(...selectedShop);
  };

  return (
    <Box as="main" display="flex" p={5} alignItems="stretch">
      {isLoading && <Loader />}
      {error && (
        <Box color="ff0000" font-size="20px" font-weight="400">
          Whoops, something went wrong: {error.message}
        </Box>
      )}
      {shops.length > 0 && (
        <SideBar
          shops={shops}
          activeshop={activeShop}
          OnClick={ActiveShopChanged}
        />
      )}
      {shops.length > 0 && <ProductsBar dishes={activeShop?.dishes} />}
    </Box>
  );
};

export default Home;
