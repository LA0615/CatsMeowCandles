import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Header from './components/Header';
// import Products from './pages/Products'; 
// import Cart from './pages/Cart'; 
// import Login from './pages/Login'; 
// import SignUp from './pages/SignUp'; 

function App() {
  return (
    <>
      <Header>
        {/* Links to different pages can go here */}
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> */}
        {/* Add more routes as needed */}
      </Routes>
      <footer>
        {/* Common footer content can go here */}
      </footer>
    </>
  );
}

export default App;