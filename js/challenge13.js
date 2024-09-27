// Você foi contratado para desenvolver um catálogo de
// filmes online. A aplicação deve permitir aos usuários
// buscar informações sobre filmes, como título, ano de
// lançamento, gênero, e avaliação. Para isso, você

// utilizará a API pública do The Movie Database (TMDb).

// Requisitos:

// A aplicação deve possuir uma página inicial com

// uma lista de filmes populares.

// DESAFIO PRÁTICO

// Os usuários devem poder buscar filmes inserindo um

// termo na barra de pesquisa.

// Ao clicar em um filme, a aplicação deve exibir

// detalhes, como sinopse, elenco, e outras

// informações relevantes.

// A interface deve ser atraente e responsiva.
// URL do link da API: https://www.themoviedb.org/

let movie = document.getElementById("nomeFilme")
let movieValue = movie.value
const btn = document.getElementById("btnMovie")

btn.addEventListener("click", () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTAwNmQzZDlhNzg5OTQ2OGE1ZWQxMzhjNTMwMmE5MyIsIm5iZiI6MTcyNzQwMTg2Ny4wMjA1MzEsInN1YiI6IjY2ZjYwZWFhN2IzMDcyNjg4ZDk2NGUyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUCROxujXpRvfeB9oVxPxX-i_JxqWG0aL-4gdpE-N4I'
        }
    };


    fetch(`https://api.themoviedb.org/3/search/movie?query=${movieValue}&api_key=c5006d3d9a7899468a5ed138c5302a93`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
})