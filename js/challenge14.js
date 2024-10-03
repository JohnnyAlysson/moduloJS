
const apiKey = "b0b1dedc2fab403aa2bd20d703170f52";
const fromCurrency = "USD";
const toCurrency = "EUR";
var money
money= prompt("How many Dollars do you have?")

fetch(`https://api.currencyfreaks.com/v2.0/supported-currencies?apikey=${apiKey}`) //fetch supported curencies
  .then(response => response.json())
  .then(data => console.log('Supported Currencies:', data))
  .catch(error => console.error('Error fetching supported currencies:', error));

fetch(`https://api.currencyfreaks.com/latest?apikey=${apiKey}&symbols=${toCurrency}`) //fetch rates URL curencies
  .then(response => response.json())
  .then(data => {
    const rate = data.rates[toCurrency];
    const convertedAmount = money * rate;
    console.log(`${money} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`);
    alert(`Now you have ${convertedAmount.toFixed(2)} Euros`)
  })
  .catch(error => console.error('Error fetching conversion rates:', error));


