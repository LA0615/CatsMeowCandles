// import {Routes, Route} from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// //import Shop from "./pages/Shop";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import SignUp from "./pages/Signup";
// import CandleCare from "./pages/CandleCare";
// import PrivacyTerms from "./pages/PrivacyTerms";

// function App() {
//   return (
//       <div className="app-container">

//       <Header />
//       <main className="main-content">

//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/*<Route path="/shop" element={<Shop />} />*/}
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/candleCare" element={<CandleCare />} />
//         <Route path="/privacyTerms" element={<PrivacyTerms />} />
//       </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Outlet /> {/* This will render the matched route components */}
      </main>
      <Footer />
    </div>
  );
}

export default App;

