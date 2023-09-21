const formateData = (weatherData) => {
  const { hourly } = weatherData;
  const { time, temperature_2m } = hourly;

  const days = {};
  let lastTemp;

  time.forEach((hour, index) => {
    const now = new Date(hour);
    const day = now.getDate();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const formattedHour = `${hours}: ${minutes}: ${seconds}`;

    const temperature = temperature_2m[index];
    const formattedTemperature = temperature_2m[index].toFixed(1);

    let up;
    if (lastTemp) {
      if (lastTemp > temperature) {
        up = 'down';
      } else if (lastTemp < temperature) {
        up = 'up';
      } else {
        up = 'same';
      }
    } else {
      up = 'no';
    }

    const hoursAndTemperature = {
      hour: formattedHour,
      temp: formattedTemperature,
      up: up
    };

    if (!days[day]) {
      days[day] = [];
    }

    days[day].push(hoursAndTemperature);

    lastTemp = temperature;
  });

  return days;
};

export default formateData;
