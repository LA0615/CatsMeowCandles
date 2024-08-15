import {RouterProvider,createBrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {path: '/', 
  element: <App />, 
  children: [
{index: true, element: <Home />}, 

  ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} /> 
);
