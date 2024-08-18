import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './pages/Shop'; 
import Cart from './pages/Cart'; 
import Login from './pages/Login'; 
import SignUp from './pages/Signup'; 

function App() {
  return (
    <>
      <Header>
        {/* Links to different pages can go here */}
      </Header>
      <Routes>
        <Route path="/*" element={<Home />} />
         <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> 
      </Routes>
      <Footer>
        {/* Common footer content can go here */}
      </Footer>
    </>
  );
}

export default App;