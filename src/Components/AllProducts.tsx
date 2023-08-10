import React, { useContext } from "react";
import SingleCard from "./SingleCard";
import { GlobalContext } from "../Context/GlobalContext";
import { GlobeType } from "../Types/Type";
// import { Prop } from '../Types/Type'

const AllProducts: React.FC = () => {
  const { categories, filterData, data } = useContext(
    GlobalContext
  ) as GlobeType;

  return (
    <>
      <section id="all-prod">
        <h4>BESTSELLER</h4>
        <p>
          LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
          INDUSTRY
        </p>
        <div className="container-fluid">
          <div className="button-con">
            {categories.map((item, index) => (
              <button onClick={() => filterData(item)} key={index}>
                {item}
              </button>
            ))}
          </div>
          <div className="row">
            {data.map((item) => (
              <div className="col-12 col-sm-12 col-md-6 col-lg-3" key={item.id}>
                <SingleCard myProp={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
