// DESAFIO PRÁTICO

// Crie uma função chamada obterCotacaoMoeda que usa
// a API de conversão de moeda da exchangeratesapi.io
// para obter a taxa de câmbio entre duas moedas. A
// função deve receber duas moedas como parâmetros: a
// moeda base (a partir da qual você deseja converter) e

// a moeda de destino (para a qual você deseja

// converter).

// Fazer uma solicitação à API da exchangeratesapi.io para
// obter as taxas de câmbio em relação à moeda base

// Verificar se a resposta da API foi bem-sucedida. Se não,
// lançar uma exceção com uma mensagem de erro.
// Converter a resposta em formato JSON e extrair a taxa

// de câmbio da moeda de destino.

// Verificar se a moeda de destino está presente nas taxas
// de câmbio. Se não estiver, lançar uma exceção com

// uma mensagem de erro.

// Retornar a taxa de câmbio da moeda de destino.

// Em seguida, crie uma função de exemplo chamada
// exemploConversaoMoeda que use a função
// obterCotacaoMoeda para converter um valor em uma
// moeda base para a moeda de destino. Por exemplo, você
// pode converter um valor em dólares para euros. Exiba o
// resultado da conversão no console.

// Certifique-se de lidar com erros adequadamente, como a
// moeda de destino não estar presente nas taxas de câmbio
// ou uma resposta de erro da API. Use async/await para lidar
// com operações assíncronas.


// Dica: Você pode usar a URL
// https://api.exchangeratesapi.io/latest?base={moedaBase}
// para fazer a solicitação à API, onde {moedaBase} é a
// moeda base especificada como parâmetro.

// Lembre-se de configurar a função
// exemploConversaoMoeda para usar moedas reais e
// valores de sua escolha para testar a conversão.

// const apiKey = "b0b1dedc2fab403aa2bd20d703170f52";
// const fromCurrency = document.getElementById("fromCurrency");
// const toCurrency = document.getElementById("toCurrency");
// var money = document.getElementById("money");

// console.log(`${fromCurrency.value},${toCurrency.value},${money.value},`)

// fetch(`https://api.currencyfreaks.com/v2.0/supported-currencies?apikey=${apiKey}`) //fetch supported curencies
//   .then(response => response.json())
//   .then(data => console.log('Supported Currencies:', data))
//   .catch(error => console.error('Error fetching supported currencies:', error));

// fetch(`https://api.currencyfreaks.com/latest?apikey=${apiKey}&symbols=${toCurrency.value}`) //fetch rates URL curencies
//   .then(response => response.json())
//   .then(data => {
//     const rate = data.rates[toCurrency];
//     const convertedAmount = money * rate;
//     console.log(`${money} ${fromCurrency.value} is equal to ${convertedAmount.toFixed(2)} ${toCurrency.value}`);
//     alert(`Now you have ${convertedAmount.toFixed(2)} Euros`)
//   })
//   .catch(error => console.error('Error fetching conversion rates:', error));

const apiKey = "b0b1dedc2fab403aa2bd20d703170f52";
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amount = document.getElementById("amount");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function populateCurrencyDropdowns(currencies) {
    Object.values(currencies).forEach(currency => {
        const option1 = new Option(currency.currencyCode, currency.currencyCode);
        const option2 = new Option(currency.currencyCode, currency.currencyCode);
        fromCurrency.add(option1);
        toCurrency.add(option2);
    });
    fromCurrency.value = "USD";
    toCurrency.value = "EUR";
}

async function fetchSupportedCurrencies() {
    try {
        const response = await fetch(`https://api.currencyfreaks.com/v2.0/supported-currencies?apikey=${apiKey}`);
        const data = await response.json();
        if (data && data.supportedCurrenciesMap) {
            populateCurrencyDropdowns(data.supportedCurrenciesMap);
        } else {
            console.error('Unexpected API response structure:', data);
        }
    } catch (error) {
        console.error('Error fetching supported currencies:', error);
    }
}

async function convertCurrency() {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amountValue = amount.value;

  try {
      const response = await fetch(`https://api.currencyfreaks.com/latest?apikey=${apiKey}&symbols=${to}&base=${from}`);
      const data = await response.json();
      
      if (data && data.rates) {
          const rate = data.rates[to];
          if (rate) {
              const convertedAmount = amountValue * rate;
              const fromName = fromCurrency.options[fromCurrency.selectedIndex].text;
              const toName = toCurrency.options[toCurrency.selectedIndex].text;
              result.textContent = `${amountValue} ${fromName} = ${convertedAmount.toFixed(2)} ${toName}`;
          } else {
              result.textContent = `Unable to find conversion rate for ${to}`;
          }
      } else if (data && data.error) {
          result.textContent = `API Error: ${data.error}`;
      } else {
          result.textContent = 'Unexpected API response format';
      }
  } catch (error) {
      console.error('Error fetching conversion rates:', error);
      result.textContent = 'An error occurred. Please try again later.';
  }
}

document.querySelector('.swap-icon').addEventListener('click', () => {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
});

convertBtn.addEventListener('click', convertCurrency);

function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }
}

toggleSwitch.addEventListener('change', switchTheme);

// Initialize
fetchSupportedCurrencies();
setInitialTheme();