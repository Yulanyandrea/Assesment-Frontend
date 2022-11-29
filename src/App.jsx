import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/index';
import About from './pages/About/index';
// import ProductDetail from './pages/ProductDetails/index';
// import Product from './Components/ProductCard/index';
import ProductDetail from './pages/ProductDetails/index';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/productcard" element={<Product />} /> */}
        {/* <Route path="/product-detail" element={<ProductDetail />} /> */}
        <Route path="/products/:id" element={<ProductDetail />} />

      </Routes>

    </div>
  );
};

export default App;
