import React from "react";
import FilterPanel from "./FilterPanel";
import FilterData from "./FiterData";

const ShoppingPage = () => {
  return (
    <section id="shopping">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 col-sm-5 col-md-3 col-lg-3">
            <FilterPanel />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-9">
            <FilterData />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingPage;
