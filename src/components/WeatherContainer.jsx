import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './WeatherContainer.css';
import Loader from './Loader';
import WeatherData from './WeatherData';
import getWeatherApi from '../apis/getWeatherApi';

const WeatherContainer = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoader, setIsLoader] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getData = async () => {
      const data = await getWeatherApi();
      if (data.ok) {
        setIsLoader(false);
        setWeatherData(data.data);
      } else {
        setError(data.err.message);
      }
    };
    getData();
  }, []);

  return (
    <div className="weather__container">
      {isLoader && <Loader />}
      {error && <p>{error}</p>}
      {weatherData && <WeatherData weatherData={weatherData} />}
    </div>
  );
};

WeatherContainer.propTypes = {};

export default WeatherContainer;
