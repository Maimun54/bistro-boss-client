import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUP from "../Pages/SignUp/SignUP";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AllUsers/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
 
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
        path:'/',
        element:<Home></Home>
       },
        {
        path:'menu',
        element:<Menu></Menu>
       },
        {
        path:'order/:category',
        element:<Order></Order>
       },
        {
        path:'login',
        element:<Login></Login>
       },
        {
        path:'signUP',
        element:<SignUP></SignUP>
       },
        {
        path:'secret',
        element:<PrivateRoute><Secret></Secret></PrivateRoute>
       },
      ]

    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
         {
          path:'cart',
          element:<Cart></Cart>
         },
         {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
         },
         {
          path:'addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
         }
      ]
    }
  ]);