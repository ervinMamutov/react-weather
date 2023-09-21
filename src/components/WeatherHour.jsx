import './WeatherHour.css';
import PropTypes from 'prop-types';

const WeatherHour = ({ hour, temp, up }) => {
  console.log(temp);

  return (
    <div>
      <div className="time">
        <h3 className="time-text">{hour}</h3>
      </div>
      <div className="temperature">
        <h3 className="temperature-text">{temp}</h3>
      </div>
      <div className="up">
        <h3 className="up">{up}</h3>
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
