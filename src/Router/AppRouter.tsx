import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Common/Header";
import Home from "../Pages/Home/Home";
import About from "../Pages/AboutUs/About";
import Shop from "../Pages/Shop/Shop";
import Gallery from "../Pages/Gallery/Gallery";
import Blog from "../Pages/Blogs/Blog";
import Contact from "../Pages/Contact/Contact";
import Search from "../Pages/Search/Search";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Basket from "../Pages/Basket/Basket";
import Footer from "../Common/Footer";
import { ToastContainer } from "react-toastify";
import DetailPage from "../Pages/Detail/DetailPage";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Login/Dashboard";
import PrivateRoute from "../Routes/PrivateRoute";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
