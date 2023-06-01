import { useEffect, useState } from "react";
import { Box } from "../Box/Box";
import { SearchBar } from "../SearchBar/SearchBar";
import { getOrders } from "../api/api";
import { Loader } from "../Loader/Loader";
import { OrdersList } from "../OrdersList/OrdersList";

export const HistoryBlock = () => {
  const [orders, setOrders] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (filter === "") return;
    try {
      setIsLoading(true);
      const getData = async () => {
        const resp = await getOrders(filter);
        if (!resp) {
          return;
        }
        setOrders(resp);
      };
      getData();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [filter]);

  const handlerFormSubmit = (e) => {
    e.preventDefault();

    if (input === filter) {
      return;
    }
    setFilter(input);
    setOrders([]);
  };

  return (
    <Box>
      <SearchBar
        inputValue={input}
        onSubmit={handlerFormSubmit}
        onChange={(e) => setInput(e.target.value)}
      />
      {error && <div>Nothing found</div>}
      {isLoading && <Loader />}
      {orders.length > 0 && <OrdersList data={orders} />}
    </Box>
  );
};
