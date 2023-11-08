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
        element: <AddFood></AddFood>
      },
      {
        path: "managemyfoods",
        element: <ManageMyFoods></ManageMyFoods>
      },
      {
        path: "myfoodrequest",
        element: <MyFoodRequest></MyFoodRequest>
      },
      {
        path: "/login",
        element: <Login></Login> 
     }
    ],
   
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-2xl mx-auto'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </div>
)
