import { BlogType } from "../Types/Type";

export const addingBlog = (blog:BlogType) => {
    return {
      type: "ADD_BLOG",
      payload: blog,
    };
  };
  export const removedBlog = (id:string) => {
    return {
      type: "REMOVE_BLOG",
      payload: id,
    };
  };
  
  export const editBlog = (blog:BlogType) => {
    return {
      type: "EDIT_BLOG",
      payload: blog,
    };
  };