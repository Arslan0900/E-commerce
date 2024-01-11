import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./page/Home";
import LoginPage from "./page/LoginPage";
import { SignUp } from "./features/auth/components/SignUp";
import SignUpPage from "./page/SignUpPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
