import { RouteObject, useRoutes, Navigate } from "react-router-dom";
import Layout from "../views/Layout/"
import Home from "../views/Home/"
import User from "../views/User/"
import Login from "../views/Login/";

export const routerItems: Array<Object> = [
  {
    path: "/",
    element: <Navigate to="/login"></Navigate>,
    label: "dashboard",
    key: "/",
  },
  {
    path: "/login",
    element: <Login></Login>,
    label: "登录页",
    key: "login",
  },
  {
    path: "/layout",
    label: "控制台",
    key: "layout",
    element: <Layout></Layout>,
    children: [
      {
        path: "home",
        label: "首页",
        key: "home",
        element: <Home></Home>,
        children: [
          {
            path: "home",
            label: "首页",
            key: "home",
            element: <Home></Home>,
          },
        ],
      },
      {
        path: "user",
        label: "用户页",
        key: "user",
        element: <User></User>,
      },
    ],
  },
];

const GetRouters =  ()=>{
  const routes:RouteObject[] = useRoutes(routerItems)
  return routes;
}


export default GetRouters;