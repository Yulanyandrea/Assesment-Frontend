import { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Counter from '../Counter/index';

const Product = () => {
  const [products, setProducts] = useState([]);
  // adding useState to control when the button and link going to be off
  const [disable, setDisable] = useState(0);
  // calling api with async funtions
  useEffect(() => {
    const callApi = async () => {
      const api = await fetch('https://fakestoreapi.com/products');
      const data = await api.json();
      console.log(data);
      setProducts(data);
      const timer = () => {
        setInterval(() => {
          setDisable((prevCounter) => prevCounter + 1);
        }, 1000);
      };
      timer();
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
                <button type="submit" onClick={handleSubmitbut} disabled={(disable >= 478)} className="containerProduct__button">
                  {disable >= 478 ? <Link to={`/products/${product.id}`} onClick={(event) => event.preventDefault()}>Go to detail</Link>
                    : <Link to={`/products/${product.id}`}>Go to detail</Link>}
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
