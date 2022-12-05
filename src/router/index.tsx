import { RouteObject, useRoutes, Navigate } from "react-router-dom";
import Layout from "../views/Layout/"
import Home from "../views/Home/"
import User from "../views/User/"

const GetRouters =  ()=>{
  const routes:RouteObject[] = useRoutes([
    {
      path: "/",
      element: <Navigate to="/layout/home"></Navigate>
    },
    {
      path: "/layout",
      element: <Layout></Layout>,
      children: [
        { element: <Home></Home>,index: true },
        { path: "user", element: <User></User> },
        
      ]
    }
  ])
  return routes;
}


export default GetRouters;