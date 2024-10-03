// Atividade 01
// Crie uma função que faz três requisições assíncronas a uma API externa de
// sua escolha (por exemplo, uma API de notícias, previsão do tempo, etc.). As
// requisições devem ser feitas em paralelo. Após receber todas as respostas,
// exiba os resultados no console.


async function loadApiKeys() {
  try {
      const response = await fetch('apy_key.json');
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
  } catch (error) {
      console.error('Erro ao carregar as chaves da API:', error);
      return {};
  }
}


async function loadCountryCurrencyData() {
  try {
      const response = await fetch('country_currency.json');
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
  } catch (error) {
      console.error('Erro ao carregar os dados de países e moedas:', error);
      return {};
  }
}


async function getWeather(city, apiKey) {
  try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}`);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
  } catch (error) {
      console.error('Erro ao buscar dados do clima:', error);
      return null;
  }
}


async function getCountryInfo(countryCode) {
  const apiKeys = await loadApiKeys();
  const countryCurrencyData = await loadCountryCurrencyData();

  if (Object.keys(apiKeys).length === 0 || Object.keys(countryCurrencyData).length === 0) {
      console.error('Não foi possível carregar os dados necessários');
      return null;
  }

  const countryInfo = countryCurrencyData[countryCode];
  if (!countryInfo) {
      console.error('País não encontrado');
      return null;
  }

  const weatherData = await getWeather(countryInfo.name, apiKeys.weather);

  return {
      country: {
          name: countryInfo.name,
          code: countryCode
      },
      currency: {
          name: countryInfo.currency,
          code: countryInfo.code,
          number: countryInfo.number
      },
      weather: weatherData ? weatherData.current : null
  };
}


function displayCountryInfo(info) {
  const resultDiv = document.getElementById('result');
  if (info) {
      resultDiv.innerHTML = `
          <div class="info-group">
              <h2>Informações do País</h2>
              <div class="info-item"><strong>Nome:</strong> ${info.country.name}</div>
              <div class="info-item"><strong>Código:</strong> ${info.country.code}</div>
          </div>
          <div class="info-group">
              <h2>Informações da Moeda</h2>
              <div class="info-item"><strong>Nome:</strong> ${info.currency.name}</div>
              <div class="info-item"><strong>Código:</strong> ${info.currency.code}</div>
              <div class="info-item"><strong>Codigo ISO:</strong> ${info.currency.number}</div>
          </div>
          ${info.weather ? `
              <div class="info-group">
                  <h2>Informações do Clima</h2>
                  <div class="info-item"><strong>Temperatura:</strong> ${info.weather.temp_c}°C</div>
                  <div class="info-item"><strong>Condição:</strong> ${info.weather.condition.text}</div>
              </div>
          ` : '<div class="info-group"><h2>Informações do Clima</h2><div class="info-item">Não disponíveis</div></div>'}
      `;
  } else {
      resultDiv.innerHTML = '<p>Não foi possível obter as informações do país.</p>';
  }
}


async function populateCountryDropdown() {
  const select = document.getElementById('countrySelect');
  const countryCurrencyData = await loadCountryCurrencyData();
  
  Object.entries(countryCurrencyData)
      .sort((a, b) => a[1].name.localeCompare(b[1].name))
      .forEach(([code, country]) => {
          const option = document.createElement('option');
          option.value = code;
          option.textContent = country.name;
          select.appendChild(option);
      });
}

async function main() {
  try {
      await populateCountryDropdown();
      const select = document.getElementById('countrySelect');
      select.addEventListener('change', async (event) => {
          const countryCode = event.target.value;
          if (countryCode) {
              const countryInfo = await getCountryInfo(countryCode);
              displayCountryInfo(countryInfo);
          } else {
              document.getElementById('result').innerHTML = '';
          }
      });
  } catch (error) {
      console.error('Erro na inicialização:', error);
      document.getElementById('result').innerHTML = '<p>Ocorreu um erro ao inicializar a aplicação.</p>';
  }
}

document.addEventListener('DOMContentLoaded', main);


// Atividade 02
// Crie uma função chamada obterDetalhesFilme que utiliza a API pública

// "The

// Movie Database (TMDb)"

// para buscar detalhes de um filme específico.

// Certifique-se de ter uma chave de API válida da TMDb.

// A função deve fazer o seguinte:
// Faça uma requisição usando fetch para a URL da API para obter os
// detalhes do filme.

// ATIVIDADE PRÁTICA

// Atividade 02
// Verifique se a resposta da API foi bem-sucedida. Se não, lance uma
// exceção com uma mensagem de erro.
// Exiba os detalhes do filme no console.
// Certifique-se de que sua função funcione corretamente e que você tenha
// substituído

// 'SUA_CHAVE_DE_API'

// pela chave de API válida da TMDb. Você
// também pode escolher um filme diferente ajustando o valor do ID do filme
// na URL da API.
// Lembre-se de utilizar async/await para lidar com a operação
// assíncrona de busca de detalhes do filme e tratar erros
// apropriadamente.