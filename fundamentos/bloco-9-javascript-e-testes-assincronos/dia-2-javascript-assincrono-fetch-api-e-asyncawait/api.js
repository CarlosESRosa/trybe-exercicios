const apiCrypto = 'https://api.coincap.io/v2/assets';

const fetchCrypto = () => {

  fetch('https://api.coincap.io/v2/assets/bitcoin')
  .then((response) => response.json())
  .then((data) => console.log(data));
};
fetchCrypto();