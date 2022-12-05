import { useState, useEffect } from 'react';
import './style.css';
import Counter from '../Counter/index';

const Product = () => {
  const [products, setProducts] = useState([]);
  // adding useState to control when the button and link going to be off
  // const [disable, setDisable] = useState(0);
  // calling api with async funtions
  useEffect(() => {
    const callApi = async () => {
      const api = await fetch('https://fakestoreapi.com/products');
      const data = await api.json();
      console.log(data);
      setProducts(data);
      // const timer = () => {
      //   setInterval(() => {
      //     setDisable((prevCounter) => prevCounter + 1);
      //   }, 1000);
      // };
      // timer();
    };
    callApi();
  }, []);
  // console.log(disable);
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
                <Counter product={product} />
              </section>
            </section>
          );
        })

      }
    </div>
  );
};
export default Product;
