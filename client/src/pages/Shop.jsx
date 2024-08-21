// import  { useState, useEffect } from 'react';
// //import './Shop.css'; // Import page-specific CSS




// const Shop = () => {

//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//       // Fetch products from an API or a static file
//       const fetchProducts = async () => {
//         try {
//           const response = await fetch('/path/to/your/products/api');
//           const data = await response.json();
//           setProducts(data);
//         } catch (error) {
//           console.error('Error fetching products:', error);
//         }
//       };
  
//       fetchProducts();
//     }, []);
//     return (
//         <div className="shop-container">
         
//           <main className="shop-main">
//             <h1>Our Products</h1>
//             <div className="products-grid">
//               {products.map((product) => (
//                 <div key={product.id} className="product-card">
//                   <img src={product.image} alt={product.name} className="product-image" />
//                   <h2 className="product-name">{product.name}</h2>
//                   <p className="product-description">{product.description}</p>
//                   <p className="product-price">${product.price}</p>
//                 </div>
//               ))}
//             </div>
//           </main>
        
//         </div>
//       );
//     };
    
//     export default Shop;



