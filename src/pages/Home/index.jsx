import './style.css';
import './styleContent.css';
import { useNavigate } from 'react-router-dom';
import Product from '../../Components/ProductCard/index';

const Home = () => {
  // funtions to navigate through click event
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/about');
  };

  return (
    <div className="home">
      <header className="home__head">
        <div className="home__iconStore">
          <img id="eunoia" alt="" className="home__image" src="/images/Eunoiacolor2.png" />
          <p className="home__storeName">Welcome to our Store</p>
        </div>
        <div className="home__navigation">
          <button type="submit" className="home__about" onClick={handleSubmit}>About</button>
        </div>
      </header>
      <section className="home__products">
        <Product />
      </section>
    </div>
  );
};
export default Home;
