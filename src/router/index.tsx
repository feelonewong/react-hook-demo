import { RouteObject, useRoutes, Navigate } from "react-router-dom";
import Layout from "../views/Layout/"
import Home from "../views/Home/"
import User from "../views/User/"

export const routerItems:Array<Object> = [
  {
    path: "/",
    element: <Navigate to="/layout/home"></Navigate>
  },
  {
    path: "/layout",
    label: "控制台",
    element: <Layout></Layout>,
    children: [
      { path: "home",  element: <Home></Home>,index: true },
      { path: "user", element: <User></User> },
    ]
  }
]

const GetRouters =  ()=>{
  const routes:RouteObject[] = useRoutes(routerItems)
  return routes;
}


export default GetRouters;