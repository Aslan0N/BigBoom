import React from "react";
import AppRouter from "./Router/AppRouter";
import { GlobalProvider } from "./Context/GlobalContext";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <WishlistProvider>
          <CartProvider>
            <AppRouter />
          </CartProvider>
        </WishlistProvider>
      </GlobalProvider>
    </>
  );
};

export default App;
