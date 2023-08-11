const initialState = localStorage.getItem("Blogs")as string
  ? JSON.parse(localStorage.getItem("Blogs"))
  : [];



export const BlogsReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.payload];
    case "REMOVE_BLOG":
      return state.filter((item:any)=> item.id !== action.payload)
   break
    default:
      return state;
  }
};