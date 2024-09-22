// ATIVIDADE PRÁTICA

// Atividade 01
// Crie uma aplicação web usando JavaScript que utilize a API do GitHub para
// recuperar informações de um usuário específico e exiba o nome do
// usuário, a imagem do proprietário e a biografia do GitHub. A aplicação
// deve permitir ao usuário inserir o nome de usuário do GitHub, clicar em um
// botão para buscar os repositórios e, em seguida, exibir os dados
// recuperados em uma interface de usuário amigável.
// Link de onde encontrar API:https://api.github.com/
// Link da API: https://api.github.com/users/{seu_usuario}
const user = document.getElementById("user");

addEventListener("click", (e) => {
  e.preventDefault();
  
  const userValue = user.value;
  const userName = document.getElementById("name")
  const userBio = document.getElementById("bio")
  const userPhoto = document.getElementById("image")

  fetch(`https://api.github.com/users/${userValue}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("It wasn't possible to continue your request");
      }
      return response.json();
    })
    .then(data => {
      console.log(data.name);
      console.log(data.bio);
      console.log(data.avatar_url);
      userName.innerHTML = data.name
      userBio.innerHTML = data.bio
      userPhoto.src = data.avatar_url
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
});


// ATIVIDADE PRÁTICA

// Atividade 02
// Você está desenvolvendo um aplicativo de entrega de produtos online e
// precisa integrar uma API de CEP (Código de Endereçamento Postal) para
// verificar o local dos clientes. Para obter informações precisas de
// localização, a fim de otimizar o processo de entrega em um aplicativo de
// comércio eletrônico é necessário utilizar uma API de cep. Link de onde
// encontrar API: https://viacep.com.br/
// Link da API:https://viacep.com.br/ws/{seu_cep}/json/

// ATIVIDADE PRÁTICA

// Atividade 03
// Você está desenvolvendo um aplicativo que utiliza a PokéAPI para exibir
// informações sobre Pokémon. Os usuários podem pesquisar Pokémon por
// nome ou número da Pokédex.
// Link de onde encontrar API: https://pokeapi.co/docs/v2
// Link da API:https://pokeapi.co/api/v2/pokemon/{nome_pokemon}