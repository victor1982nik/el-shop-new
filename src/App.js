import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home/HomePage";
import Cart from "./pages/Cart/CartPage";
import { Context } from "./context";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { History } from "./pages/History/HistoryPage";

function App() {
  const [cart, setCart] = useState([]);
  const [activeShop, setActiveShop] = useState({});

  return (
    <>
      <Context.Provider value={{ cart, setCart, activeShop, setActiveShop }}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/history" element={<History />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Context.Provider>
    </>
  );
}

export default App;
