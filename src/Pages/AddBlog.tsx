import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addingBlog } from "../Redux/Action";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BlogType } from "../Types/Type";



const AddBlogs = () => {
  const [blog, setBlog] = useState<BlogType>({
    id: uuidv4(),
    title: "",
    date: "",
    admin: "",
    content: "",
    image: "",
  });

  const handleChange = (e:any) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  const location = useNavigate();
  const dispatch = useDispatch();
  const submitForm = (e :any) => {
    e.preventDefault();
    dispatch(addingBlog(blog));
    location("/blog");
  };

  // Translation

  const {t} = useTranslation()

  return (
    <>
      <section id="addblogs">
      <h4>{t("addblog.0")}</h4>
        <form onSubmit={submitForm}>
         
          <div className="input-con mb-3">
            <input
              type="text"
              required
              onChange={handleChange}
              name="date"
              autoComplete="off"
            />
            <label htmlFor="exampleInputPassword1" className="form-label">
            Date
            </label>
          </div>
         
          <div className="input-con mb-3">
            <input
              type="text"
              required
              onChange={handleChange}
              name="content"
              autoComplete="off"
            />
            <label htmlFor="exampleInputPassword1" className="form-label">
            Content
            </label>
          </div>
          <div className="input-con mb-3">
            <input
              type="text"
              required
              onChange={handleChange}
              name="image"
              autoComplete="off"
            />
            <label htmlFor="exampleInputPassword1" className="form-label">
            Image
            </label>
          </div>
          <button type="submit">
          Add Blog
          </button>
        </form>
      </section>
    </>
  );
};

export default AddBlogs;