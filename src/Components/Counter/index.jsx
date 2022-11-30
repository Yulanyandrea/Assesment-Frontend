import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';
import './style.css';

const Counter = () => {
  return (
    <div className="counter">
      <Timer active duration={2 * 60 * 1000}>
        <Timecode />
      </Timer>
    </div>
  );
};

export default Counter;
