import { createBrowserRouter, redirect } from "react-router-dom";
import { lazy } from "react";
import App from "./App";
const Dashboard = lazy(() => import("./Dashboard"));
const Products = lazy(() => import("./Products"));
const ProductDetails = lazy(() => import("./ProductDetails"));
const Error = lazy(() => import("./Error"));
const Login = lazy(() => import("./Login"));


export const routes = createBrowserRouter([
   
    {path : "/", 
        element : <App />,
        loader : () => { 
                           
            // if(!localStorage.getItem("token")) 
            //              {return redirect("/login"); } 
            //            else return null},
            return null;
        },
        children : [
            {path : "", element : <Dashboard />},
            {path : "/products", element : <Products />},
            {path: "/products/details/:id/:discount?", element: <ProductDetails />}
        ]
    },
    { path : "/login", element : <Login />},
    { path : "*", element : <Error />}
]);