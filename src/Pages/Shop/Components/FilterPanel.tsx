import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { GlobalContext } from "../../../Context/GlobalContext";
import { GlobeType } from "../../../Types/Type";

const FilterPanel = () => {
  const { filterCat, categories, searchFilter, isOpen, setIsOpen } = useContext(
    GlobalContext
  ) as GlobeType;

  return (
    <div id="filter-panel" className={isOpen ? "tr-none" : ""}>
      <p className="close" onClick={() => setIsOpen(!isOpen)}>
        <span>
          <IoCloseSharp className="i"/>
        </span>
      </p>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="search-box">
              <h3>Search</h3>
              <div>
                <input
                  type="text"
                  onChange={(e) => searchFilter(e.target.value)}
                  placeholder="Search"
                />
                <span>
                  <AiOutlineSearch className="i" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <h3>Categories</h3>
            <div className="category-con">
              <ul>
                {categories.map((item, index) => {
                  return (
                    <li onClick={() => filterCat(item)} key={index}>
                      <label htmlFor={`cat${index + 1}`}>
                        {item}{" "}
                        <input
                          type="radio"
                          name="category"
                          id={`cat${index + 1}`}
                        />
                      </label>{" "}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <h3>Size options</h3>
            <div className="size-con">
              <span className="px-3">S</span>
              <span>M</span>
              <span className="px-3">L</span>
              <span>XL</span>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <h3>Popular Tags</h3>
            <div className="tag-con">
              <span>Boudin</span>
              <span>Chicken</span>
              <span>Libero</span>
              <span>Hamboudin</span>
              <span>Picanha</span>
              <span>Biltong</span>
              <span>Bresaola</span>
              <span>Wandouille</span>
              <span>Balltip</span>
              <span>Doggenpuis</span>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 aft">
            <img
              src="https://opencart.smartaddons.com/themes/so_bigboom/image/catalog/banners/banner-sidebar.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
