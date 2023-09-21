import axios from 'axios';
import data from '../data/data';

const getWeatherApi = async () => {
  const encodingUrl = encodeURI(data.baseUrl);
  try {
    const res = await axios.get(encodingUrl);
    if (res.status === 200) {
      return {
        ok: true,
        data: res.data
      };
    } else {
      throw new Error(`Failed fetch a weather data status : ${res.status}`);
    }
  } catch (err) {
    return {
      err: err,
      ok: false
    };
  }
};

export default getWeatherApi;
