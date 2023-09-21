import './WeatherData.css';
import PropTypes from 'prop-types';
import WeatherDay from './WeatherDay';
import formateData from '../utils/formateData';

const WeatherData = ({ weatherData }) => {
  const hoursAndTemp = formateData(weatherData);

  return (
    <div className="weather-day">
      <div className="weather-date">
        {Object.entries(hoursAndTemp).map(([day, timeAndTemp], index) => (
          <WeatherDay key={index} day={day} timeAndTemp={timeAndTemp} />
        ))}
      </div>
    </div>
  );
};

WeatherData.propTypes = {
  weatherData: PropTypes.object.isRequired
};

export default WeatherData;
