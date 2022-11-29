import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const ProductsApi = async () => {
      const api = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await api.json();
      setProductDetail(data);
    };
    ProductsApi();
  }, []);
  return (
    <div className="containerDetail">
      <section className="containerDetail__Product">
        <section className="containerDetail__image">
          <img src={productDetail.image} alt="" className="containerProduct__picture" />
          <section className="containerDetail__title">
            <p className="containerDetail__detail"><strong className="colorfont">Name: </strong>  {productDetail.title}</p>
            <p className="productDetail__description"><strong className="colorfont">Description: </strong>  {productDetail.description}</p>
            <p className="ProductDetail__price"><strong className="colorfont">Price: </strong>  {productDetail.price}</p>
            <p className="ProductDetail__category"><strong className="colorfont">Category: </strong>  {productDetail.category}</p>
          </section>
        </section>
      </section>
    </div>
  );
};
export default ProductDetail;
