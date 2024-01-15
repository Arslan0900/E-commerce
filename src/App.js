import React from "react";
import "./App.css";
import Home from "./page/Home";
import LoginPage from "./page/LoginPage";
import SignUpPage from "./page/SignUpPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from "./page/CartPage";
import Checkout from "./page/Checkout";

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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
