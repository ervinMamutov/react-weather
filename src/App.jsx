import './App.css';
import Header from './components/Header';
import WeatherContainer from './components/WeatherContainer';

const App = () => {
  return (
    <>
      <Header text="Brussels Weather" />
      <WeatherContainer />
    </>
  );
};

export default App;
