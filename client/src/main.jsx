import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
 import Shop from "./pages/Shop.jsx";
import User from "./pages/User.jsx";
import Cart from "./pages/Cart.jsx";
import CandleCare from "./pages/CandleCare.jsx"; 
import PrivacyTerms from "./pages/PrivacyTerms.jsx";
import ReturnPolicy from './pages/ReturnPolicy.jsx';
import Favorites from './pages/Favorites.jsx';
import CurrentOrders from './pages/CurrentOrders.jsx';
import PastOrders from './pages/PastOrders.jsx';
import AccountInfo from './pages/AccountInfo.jsx';

const router = createBrowserRouter([
  {
    path: "/", // trailing parent path to match child routes so they render properly
    element: <App />,
    children: [
      { index: true, element: <Home /> },
       { path: "shop", element: <Shop /> },
       { path: "user/*", element: <User />, children: [
        { path: "favorites", element: <Favorites /> },
        { path: "current-orders", element: <CurrentOrders /> },
        { path: "past-orders", element: <PastOrders /> },
        { path: "account-info", element: <AccountInfo /> },
        { path: "return-policy", element: <ReturnPolicy /> },
        { path: "candle-care", element: <CandleCare /> },
      ]},

      { path: "cart", element: <Cart /> },
      { path: "privacy", element: <PrivacyTerms /> },
      {path: "return", element: <ReturnPolicy /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

