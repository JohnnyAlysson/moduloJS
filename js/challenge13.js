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

const apiKey = 'c5006d3d9a7899468a5ed138c5302a93';
const baseUrl = 'https://api.themoviedb.org/3';
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const movieList = document.getElementById('movieList');
const movieDetails = document.getElementById('movieDetails');
const homeBTN = document.getElementById('homeBTN')

fetchPopularMovies();

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
        searchMovies(query);
    }
});

homeBTN.addEventListener("click", fetchPopularMovies)

function fetchPopularMovies() {
    fetch(`${baseUrl}/movie/popular?api_key=${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(data => displayMovies(data.results))
        .catch(err => console.error('Erro ao buscar filmes populares:', err));
}

function searchMovies(query) {
    fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${query}&language=pt-BR`)
        .then(response => response.json())
        .then(data => displayMovies(data.results))
        .catch(err => console.error('Erro na busca:', err));
}

function displayMovies(movies) {
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${imageBaseUrl}${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        movieCard.addEventListener('click', () => fetchMovieDetails(movie.id));
        movieList.appendChild(movieCard);
    });
}

function fetchMovieDetails(movieId) {
    fetch(`${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=pt-BR&append_to_response=credits`)
        .then(response => response.json())
        .then(data => displayMovieDetails(data))
        .catch(err => console.error('Erro ao buscar detalhes do filme:', err));
}

function displayMovieDetails(movie) {
    const cast = movie.credits.cast.slice(0, 5).map(actor => actor.name).join(', ');
    movieDetails.scrollIntoView({behavior:"smooth"})
    movieDetails.innerHTML = `
        <h2>${movie.title} (${movie.release_date.slice(0, 4)})</h2>
        <p><strong>Gênero:</strong> ${movie.genres.map(genre => genre.name).join(', ')}</p>
        <p><strong>Avaliação:</strong> ${movie.vote_average}/10</p>
        <p><strong>Sinopse:</strong> ${movie.overview}</p>
        <p><strong>Elenco principal:</strong> ${cast}</p>
    `;
}