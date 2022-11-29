import { useState, useEffect } from 'react';
// import camiseta from './images/camiseta.jpg';
import './style.css';
import { Link } from 'react-router-dom';
import Counter from '../Counter/index';

const Product = () => {
  const [products, setProducts] = useState([]);
  // calling api with async funtions
  useEffect(() => {
    const callApi = async () => {
      const api = await fetch('https://fakestoreapi.com/products');
      const data = await api.json();
      console.log(data);
      setProducts(data);
    };
    callApi();
  }, []);

  const handleSubmitbut = (e) => {
    e.preventDefault();
  };
  return (
    <div className="containerProduct">
      {
        products.map((product) => {
          return (
            <section className="containerProduct__image">
              <img src={product.image} alt="" className="containerProduct__picture" />
              <section className="containerProduct__title">
                <h2 className="containerProduct__detail">{product.title}</h2>
              </section>
              <section className="containerProduct__option">
                <Counter />
                <button type="submit" className="containerProduct__button" onClick={handleSubmitbut}>
                  <Link to={`/products/${product.id}`}>Go to detail</Link>
                </button>
              </section>
            </section>
          );
        })

      }
    </div>
  );
};
export default Product;
