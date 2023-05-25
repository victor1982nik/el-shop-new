import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home/HomePage";
import Cart from "./pages/Cart/CartPage";
import { Context } from "./context";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  //console.log(cart);
  return (
    <>
      <Context.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
