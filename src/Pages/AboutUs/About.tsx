import React from "react";
import GlobSec from "../../Components/GlobSec";
import AboutFirst from "./Components/AboutFirst";
import AboutTitle from "./Components/AboutTitle";
import MinNews from "../../Components/MinNews";
import AboutSlider from "./Components/AboutSlider";
import Space from "../../Components/Space";

const About = () => {
  return (
    <>
      <GlobSec title="About Us" />
      <AboutFirst />
      <AboutTitle />
      <MinNews/>
      <AboutSlider/>
      <Space/>
    </>
  );
};

export default About;
