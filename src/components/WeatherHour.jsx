import './WeatherHour.css';
import PropTypes from 'prop-types';
import {
  FaArrowDownShortWide,
  FaArrowUpShortWide,
  FaEquals
} from 'react-icons/fa6';

const WeatherHour = ({ hour, temp, up }) => {
  return (
    <div className="weather-data-container">
      <div className="time">
        <h3 className="time-text">{hour}</h3>
      </div>
      <div className="up">
        <h3 className="up">
          {up === 'no' ? null : up === 'up' ? (
            <FaArrowUpShortWide color="red" />
          ) : up === 'down' ? (
            <FaArrowDownShortWide color="blue" />
          ) : (
            <FaEquals color="black" />
          )}
        </h3>
      </div>
      <div className="temperature">
        <h3 className="temperature-text">{temp}</h3>
      </div>
    </div>
  );
};

WeatherHour.propTypes = {
  hour: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  up: PropTypes.string.isRequired
};

export default WeatherHour;
