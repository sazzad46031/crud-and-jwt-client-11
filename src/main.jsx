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
import Fooddetails from './Components/Fooddetails/Fooddetails.jsx';
import Updatefood from './Components/Updatefood/Updatefood.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/foods')
      },
      {
        path: "availablefoods",
        element: <AvailableFoods></AvailableFoods>,
        loader: ()=> fetch('http://localhost:5000/foods')
      },
      {
        path: "addfood",
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
      },
      {
        path: "fooddetails/:id",
        element : <Fooddetails></Fooddetails>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
      },
      {
        path: "managemyfoods",
        element: <PrivateRoute><ManageMyFoods></ManageMyFoods></PrivateRoute>,
        loader: ()=> fetch('http://localhost:5000/foods')
      },
      {
        path: "updatefood/:id",
        element: <Updatefood></Updatefood>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
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
