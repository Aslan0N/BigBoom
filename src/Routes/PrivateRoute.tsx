import React from "react";
import { Util } from "../Utils/Util";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  if (Util()) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default PrivateRoute;
