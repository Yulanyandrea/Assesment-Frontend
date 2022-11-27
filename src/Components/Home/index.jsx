import { useNavigate } from 'react-router-dom';
import './style.css';
import './styleContent.css';
import eunoia from './images/Eunoiacolor2.png';

const Home = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const navigate = useNavigate();
    navigate('/about');
  }
  return (
    <div className="home">
      <header className="home__head">
        <div className="home__iconStore">
          <img src={eunoia} alt="" className="home__image" />
          <p className="home__storeName">Store</p>
        </div>
        <div className="home__navigation">
          <button type="submit" className="home__about" onClick={handleSubmit}>About</button>
          <button type="submit" className="home__productDetail">Product Details</button>
        </div>
      </header>
    </div>
  );
};
export default Home;
