/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-operators */
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Counter = ({ product }) => {
  const Ref = useRef(null);

  // The state for  timer
  const [timer, setTimer] = useState('00:00:00');

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 * 60 * 60) % 24);
    return {
      total, hours, minutes, seconds,
    };
  };

  const startTimer = (e) => {
    const {
      total, hours, minutes, seconds,
    } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        `${hours > 9 ? hours : `0${hours}`}:${
          minutes > 9 ? minutes : `0${minutes}`}:${
          seconds > 9 ? seconds : `0${seconds}`}`,
      );
    }
  };

  const clearTimer = (e) => {
    setTimer('00:00:00');

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    const deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + Math.floor(Math.random() * (180 - 60) + 60));
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const handleSubmitbut = (e) => {
    e.preventDefault();
  };

  return (
    <div className="CounterContainer">
      <div className="counter">{timer}</div>
      <button type="submit" onClick={handleSubmitbut} disabled={(timer === '00:00:00')} className="containerProduct__button">
        {timer === '00:00:00' ? <Link to={`/products/${product.id}`} className="disabled-link">Go to detail</Link>
          : <Link to={`/products/${product.id}`}>Go to detail</Link>}
      </button>
    </div>
  );
};

export default Counter;
