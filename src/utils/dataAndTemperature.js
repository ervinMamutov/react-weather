const dataAndTemperature = (time, temperature) => {
  const length = time.length;
  const dateTemperature = {};

  for (let i = 0; i < length; i++) {
    const key = time[i].split('T')[0];
    const hour = time[i].split('T')[1];
    const hourTemperature = temperature[i];

    const timeAndTemperature = {
      hour: hour,
      temperature: hourTemperature
    };

    if (!dateTemperature[key]) {
      dateTemperature[key] = [timeAndTemperature];
    } else {
      dateTemperature[key].push(timeAndTemperature);
    }
  }

  return dateTemperature;
};

export default dataAndTemperature;
