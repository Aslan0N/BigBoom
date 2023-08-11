import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removedBlog } from "../../Redux/Action";
import { NavLink } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";

const Dashboard = () => {
  const dispatch = useDispatch();

  // Store
  const myBlogs = useSelector((store: any) => store.BlogsReducer);

  return (
    <>
      <section id="dashboard">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="container-fluid">
              <div className="row">
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 bold">
                  Image
                </div>
                
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 bold">
                  Content
                </div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 bold">
                  Date
                </div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 bold"></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            {myBlogs.map((item: any) => {
              return (
                <div className="container-fluid" key={item.id}>
                  <div className="row">
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3">
                      <img src={item.image} alt="" />
                    </div>
                    
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 price">
                      {item.content}
                    </div>
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3">
                     {item.date}
                    </div>
                    
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3">
                      <button
                        className="ms-3"
                        onClick={() => dispatch(removedBlog(item.id))}
                      >
                        <BsTrash3 className="i" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button className="add">
            <NavLink to={"/addblog"}>Add Blog</NavLink>
          </button>
      </div>
      
    </section>
    </>
  );
};

export default Dashboard;
