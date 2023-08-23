import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import Dashboard from "./Dashboard";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Error from "./Error";
import Login from "./Login";


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