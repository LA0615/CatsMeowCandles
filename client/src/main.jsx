import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import SignUp from "./pages/Signup.jsx";
import CandleCare from "./pages/CandleCare.jsx"; 


const router = createBrowserRouter([
  {
    path: "/*", // trailing parent path to match child routes so they render properly
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "cart", element: <Cart /> },
      { path: 'candle-care', element: <CandleCare /> }, 

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
