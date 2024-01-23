import React from "react";
import "./App.css";
import Home from "./page/Home";
import LoginPage from "./page/LoginPage";
import SignUpPage from "./page/SignUpPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "./page/CartPage";
import Checkout from "./page/Checkout";
import Error404 from "./page/Error404";
import ProductDetailPage from "./page/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "Login",
    element: (<LoginPage></LoginPage>),
  },
  {
    path: "SignUp",
    element: (<SignUpPage></SignUpPage>),
  },
  { 
    path: "Cart",
    element: (<CartPage></CartPage>),
  },
  { 
    path: "Checkout",
    element: (<Checkout></Checkout>),
  },
  { 
    path: "product-detail/:id",
    element: (<ProductDetailPage></ProductDetailPage>),
  },
  { 
    path: "*",
    element: (<Error404></Error404>),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
