import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
 //import Shop from "./pages/Shop.jsx";
import User from "./pages/User.jsx";
import Cart from "./pages/Cart.jsx";
import CandleCare from "./pages/CandleCare.jsx"; 
import PrivacyTerms from "./pages/PrivacyTerms.jsx";

const router = createBrowserRouter([
  {
    path: "/*", // trailing parent path to match child routes so they render properly
    element: <App />,
    children: [
      { index: true, element: <Home /> },
       //{ path: "shop", element: <Shop /> },
      { path: "user", element: <User /> },
      { path: "cart", element: <Cart /> },
      { path: "Care", element: <CandleCare /> }, 
      { path: "privacy", element: <PrivacyTerms /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);