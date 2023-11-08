import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import AvailableFoods from './Pages/AvailableFoods.jsx';
import AddFood from './Pages/AddFood.jsx';
import ManageMyFoods from './Pages/ManageMyFoods.jsx';
import MyFoodRequest from './Pages/MyFoodRequest.jsx';
import Login from './Pages/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Register from './Components/Register/Register.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "availablefoods",
        element: <AvailableFoods></AvailableFoods>
      },
      {
        path: "addfood",
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
      },
      {
        path: "managemyfoods",
        element: <PrivateRoute><ManageMyFoods></ManageMyFoods></PrivateRoute>
      },
      {
        path: "myfoodrequest",
        element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>
      },
      {
        path: "login",
        element: <Login></Login> 
      },
      {
        path: "register",
        element: <Register></Register>
      }
    ],
   
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-2xl mx-auto'>
    <React.StrictMode>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </React.StrictMode>,
  </div>
)
