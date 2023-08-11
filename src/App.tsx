import React, { useEffect } from "react";
import AppRouter from "./Router/AppRouter";
import { GlobalProvider } from "./Context/GlobalContext";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";
import { useSelector } from "react-redux";

const App = () => {

  const myBlogs = useSelector((store:any) => store.BlogsReducer);
  useEffect(() => {
    localStorage.setItem("Blogs", JSON.stringify(myBlogs));
  }, [myBlogs]);
  
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
