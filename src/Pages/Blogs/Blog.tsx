import React from "react";
import { useSelector } from "react-redux";
import GlobSec from "../../Components/GlobSec";

const Blog = () => {
  const myBlogs = useSelector((store:any) => store.BlogsReducer);

  

  return (
    <>
      <GlobSec title="Blog" />
      <section id="blog">
        <h4>Blog</h4>
       <div className="container-fluid">
        
        <div className="row">
          {
            myBlogs.map((blog:any)=>(
              <div className="col-12 col-sm-12 col-md-6 col-lg-4">
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
            ))
          }
        </div>
       </div>
      </section>
      
    </>
  );
};

export default Blog;