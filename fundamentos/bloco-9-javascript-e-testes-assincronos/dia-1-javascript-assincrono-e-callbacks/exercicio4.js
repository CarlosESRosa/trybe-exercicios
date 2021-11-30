const messageDelay = () => Math.floor(Math.random() * 5000);
const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
function sendMarsTemperature() {
  setTimeout(() => {
    const marsTemp = 20;
    const temperatureTemplate = `Mars temperature is: ${marsTemp} degree Celsius`
    console.log(temperatureTemplate);
  }, messageDelay());
};

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo