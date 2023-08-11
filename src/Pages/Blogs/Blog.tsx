import React from "react";
import { useSelector } from "react-redux";
import GlobSec from "../../Components/GlobSec";
import { AiOutlineSearch } from "react-icons/ai";

const Blog = () => {
  const myBlogs = useSelector((store: any) => store.BlogsReducer);

  const categories = [
    "Camera",
    "Demo Category 1",
    "Demo Category 2",
    "Playstation",
    "Reviews",
    "Videos",
  ];

  return (
    <>
      <GlobSec title="Blog" />
      <section id="blog">
        <h4>Blog</h4>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-9">
              <div className="container-fluid">
                <div className="row">
                  {myBlogs.map((blog: any) => (
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <div className="blog-card">
                        <div className="item">
                          <img src={blog.image} alt="" />
                        </div>
                        <div className="p-con">
                          <p className="date">{blog.date}</p>
                          <h4>{blog.content}</h4>
                          <button>READ MORE</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="search-box">
                      <h3>Search</h3>
                      <div>
                        <input type="text" placeholder="Search" />
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
                            <li key={index}>
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
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 aft">
                    <img
                      src="https://opencart.smartaddons.com/themes/so_bigboom/image/catalog/banners/banner-sidebar.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
