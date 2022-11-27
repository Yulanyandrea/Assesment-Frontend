import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/index';
import About from './Components/About/index';
import Product from './Components/ProductDetails/index';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ProductDetail" element={<Product />} />

      </Routes>

    </div>
  );
};

export default App;
