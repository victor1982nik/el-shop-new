import { useEffect, useState } from "react";
import { Box } from "../../components/Box/Box";
import { ProductsBar } from "../../components/ProductsBar/ProductsBar";
import { SideBar } from "../../components/SideBar/SideBar";
import { fetchShops } from "../../components/api/api";
import { Loader } from "../../components/Loader/Loader";

const Home = () => {
  const [shops, setShops] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return (
    <Box as="main" display="flex" p={5}>
      {isLoading && <Loader />}
      {error && (
        <Box color="ff0000" font-size="20px" font-weight="400">
          Whoops, something went wrong: {error.message}
        </Box>
      )}
      {shops.length > 0 && <SideBar shops={shops} />}
      <ProductsBar />
    </Box>
  );
};

export default Home;
