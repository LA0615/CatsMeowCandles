import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import User from "./pages/User.jsx";
import ForgotPassword from './components/ForgotPassword.jsx';
import ResetPassword from './components/ResetPassword.jsx';
import Candles from './pages/Candles.jsx';
import TeaLights from './pages/TeaLights.jsx';
 import WaxMelts from './pages/WaxMelts.jsx';
 import Votives from './pages/Votives.jsx';
  import SpecialtyCandles from './pages/SpecialtyCandles.jsx';
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
       { path: "shop", element: <Shop /> }, //shop page and products 
       { path: "shop/candles", element: <Candles /> },
      { path: "shop/tea-lights", element: <TeaLights /> },
       { path: "shop/wax-melts", element: <WaxMelts /> },
      { path: "shop/votives", element: <Votives /> },
      { path: "shop/specialty", element: <SpecialtyCandles /> },
        {path: "forgot-password", element: <ForgotPassword /> }, //forgot password and reset password
       {path: "reset-password/:token", element: <ResetPassword /> },

       { path: "user/*", element: <User />, children: [ //user page and account info
        { path: "favorites", element: <Favorites /> },
        { path: "current-orders", element: <CurrentOrders /> },
        { path: "past-orders", element: <PastOrders /> },
        { path: "account-info", element: <AccountInfo /> },
        { path: "return-policy", element: <ReturnPolicy /> },
        { path: "candle-care", element: <CandleCare /> },
      ]},

      { path: "cart", element: <Cart /> }, //cart page
      { path: "privacy", element: <PrivacyTerms /> },
      {path: "return", element: <ReturnPolicy /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

