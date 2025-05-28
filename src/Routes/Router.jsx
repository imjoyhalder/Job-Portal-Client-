import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>, 
    errorElement: <h2>Route Not Found</h2>, 
    children: [
        {
            path:'/', 
            element: <Home></Home>
        }, 
        {
            path: '/register', 
            element: <Register></Register>
        },
        {
            path: '/login', 
            element: <SignIn></SignIn>
        }
    ]
  },
]);