import {createBrowserRouter,RouterProvider, } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Cart from "../components/Cart/Cart";
import Blog from "../components/Blog";
import About from "../components/About";

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/Cart',
            element: <Cart/>
        },
        {
            path: '/Blog',
            element: <Blog/>
        },
        {
            path: '/About',
            element: <About/>
        }
      ]
    },
  ]);

  export default Router;