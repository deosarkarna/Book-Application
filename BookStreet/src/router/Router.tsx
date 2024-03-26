import {createBrowserRouter,RouterProvider, } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Cart from "../components/Cart/Cart";
import Blog from "../components/Blog";
import About from "../components/About";
import BookDisplay from "../components/BookDisplay";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";

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
        },
        {
          path:'/book/:id',
          element:<BookDisplay/>,
          loader: ({params})=>fetch(`http://localhost:4000/book/${params.id}`)
        }
      ]
    },
        {
            path: '/admin/dashboard',
            element: <DashboardLayout/>,
            children:[
              {
                path: '/admin/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/admin/dashboard/upload',
                element: <UploadBook/>
            },
            {
                path: '/admin/dashboard/manage',
                element: <ManageBooks/>
            },
            {
                path: '/admin/dashboard/edit/:id',
                element: <EditBooks/>,
                loader: ({params})=> fetch(`http://localhost:4000/book/${params.id}`)
            }
            ]
        },     
  ]);

  export default Router;