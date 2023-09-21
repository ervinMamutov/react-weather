import PropTypes from 'prop-types';
import './WeatherDay.css';
import WeatherHour from './WeatherHour';

const WeatherDay = ({ day, timeAndTemp }) => {
  console.log({ timeAndTemp });

  return (
    <div className="weather-day">
      <div className="day">
        <h2 className="day-text">{day}</h2>
      </div>
      <div className="time-container">
        {timeAndTemp.map((entry, index) => (
          <WeatherHour
            key={index}
            hour={entry.hour}
            temp={entry.temp}
            up={entry.up}
          />
        ))}
      </div>
    </div>
  );
};

WeatherDay.propTypes = {
  day: PropTypes.string.isRequired,
  timeAndTemp: PropTypes.array.isRequired
};

export default WeatherDay;

/* 
{Object.entries(timeAndTemp).map(([hour, temp, up], index) => (
  <WeatherHour key={index} hour={hour} temp={temp} up={up} />
))} */
