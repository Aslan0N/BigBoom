import React from "react";
import { FaHome } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MainProp } from "../Types/Type";



const GlobSec = ( props :MainProp) => {
  return (
    <section id="glob-sec">
      <FaHome />
      <MdKeyboardDoubleArrowRight />
      <p>{props.title}</p>
    </section>
  );
};

export default GlobSec;
