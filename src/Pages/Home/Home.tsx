import React from "react";
import Slide from "./Components/Slide";
import LogoSlider from "../../Components/LogoSlider";
import Arrivals from "./Components/Arrivals";
import Populars from "./Components/Populars";
import AllProducts from "../../Components/AllProducts";
import Design from "./Components/design";
import Partners from "../../Components/Partners";
import BgAttachment from "./Components/BgAttachment";
import MinNews from "../../Components/MinNews";

const Home = () => {
  return (
    <>
      <Slide />
      <LogoSlider />
      <Arrivals />
      <Populars />
      <AllProducts />
      <Design />
      <Partners />
      <BgAttachment/>
      <MinNews/>
    </>
  );
};

export default Home;
