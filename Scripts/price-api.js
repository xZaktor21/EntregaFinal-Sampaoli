var btc = document.getElementById('btc');
var eth = document.getElementById('eth');
var bnb = document.getElementById('bnb');
var doge = document.getElementById('doge');

function obtenerPrecios() {
  return new Promise((resolve, reject) => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Cdogecoin&vs_currencies=usd')
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

obtenerPrecios()
  .then(data => {
    console.log(data);
    btc.innerHTML = data.bitcoin.usd;
    eth.innerHTML = data.ethereum.usd;
    bnb.innerHTML = data.binancecoin.usd;
    doge.innerHTML = data.dogecoin.usd;
  })
  .catch(error => {
    console.error(error);
  });
