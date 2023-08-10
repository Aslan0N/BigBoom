import React, { useContext, useState } from "react";
import { TfiLayoutColumn3Alt } from "react-icons/tfi";
import { TfiLayoutColumn4Alt } from "react-icons/tfi";
import { MdTableRows } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import SingleCard from "../../../Components/SingleCard";
import { GlobalContext } from "../../../Context/GlobalContext";
import { GlobeType } from "../../../Types/Type";

const FiterData = () => {
  // Count show
  const [show, setShow] = useState<boolean>(true);

  //   Contexct
  const { myMap, rows, setRows, setIsOpen, isOpen } = useContext(GlobalContext) as GlobeType;

  

  const myRow = document.querySelectorAll<Element>(".catch") 
  

  if(rows === 1){
    myRow.forEach(row=> row.classList.add("col-md-4", "col-lg-4"))
    myRow.forEach(row=> row.classList.remove("col-md-3", "col-lg-3"))
    myRow.forEach(row=> row.classList.remove("col-md-12", "col-lg-12"))
  }else if(rows === 2){
    myRow.forEach(row=> row.classList.add("col-md-3", "col-lg-3"))
    myRow.forEach(row=> row.classList.remove("col-md-12" ,"col-lg-4"))
    myRow.forEach(row=> row.classList.remove("col-md-4", "col-lg-12"))
  }else if(rows === 3){
    myRow.forEach(row=> row.classList.add("col-md-12", "col-lg-12"))
    myRow.forEach(row=> row.classList.remove("col-md-4", "col-lg-3"))
    myRow.forEach(row=> row.classList.remove("col-md-3", "col-lg-4"))
  }

  

  return (
    <div id="filter-prod">
      <h3 className="ms-3">SHOP</h3>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="item">
              <img
                src="https://opencart.smartaddons.com/themes/so_bigboom/image/catalog/demo/banners/listting-banner.jpg"
                alt=""
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 my-d">
            <div className="button-con">
                <div className="sidebar-btn" onClick={()=> setIsOpen(!isOpen)}>
                    <span><HiBars3 className="i"/></span>
                    <p>SIDEBAR</p>
                </div>
              <span className={rows === 1 ? "bor" : ''} onClick={()=> setRows(1)}>
                <TfiLayoutColumn3Alt className="i" />
              </span>
              <span className={rows === 2 ? "bor" : ''} onClick={()=> setRows(2)}>
                <TfiLayoutColumn4Alt className="i" />
              </span>
              <span className={rows === 3 ? "bor big" : 'big'} onClick={()=> setRows(3)}>
                <MdTableRows className="i" />
              </span>
            </div>
            <div className="count">
              <p>Show:</p>
              <div
                className={!show ? "show-count show" : "show-count"}
                onClick={() => setShow(!show)}
              >
                count{" "}
                <span>
                  <MdKeyboardArrowDown />
                </span>
                <ul>
                  <li>10</li>
                  <li>15</li>
                  <li>20</li>
                </ul>
              </div>
            </div>
            <div className="select">
              <p>Sort by:</p>
              <select id="">
                <option value="Sort1">Sort1</option>
                <option value="Sort2">Sort2</option>
                <option value="Sort3">Sort3</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="container">
              <div className="row">
                {myMap.map((item) => {
                  return (
                    <div className="col-12 col-sm-12  catch">
                      <SingleCard myProp={item} key={item.id} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiterData;
