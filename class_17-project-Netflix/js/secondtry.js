const apiKey = 'c5006d3d9a7899468a5ed138c5302a93';
const baseUrl = 'https://api.themoviedb.org/3';
const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

const featuredContentEl = document.getElementById('featuredContent');
const genreRowsEl = document.getElementById('genreRows');
const movieDetailsEl = document.getElementById('movieDetails');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

const genresToShow = [
    { id: 28, name: 'Action' },
    { id: 35, name: 'Comedy' },
    { id: 18, name: 'Drama' },
    { id: 27, name: 'Horror' }
];

async function fetchMovies(endpoint) {
    try {
        const url = `${baseUrl}${endpoint}${endpoint.includes('?') ? '&' : '?'}api_key=${apiKey}&language=en-US`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
}

async function displayFeaturedContent() {
    const movies = await fetchMovies('/movie/popular');
    if (movies.length > 0) {
        const featured = movies[0];
        featuredContentEl.style.backgroundImage = `url(${imageBaseUrl}${featured.backdrop_path})`;
        featuredContentEl.innerHTML = `
            <div class="featured-info">
                <h2>${featured.title}</h2>
                <p>${featured.overview}</p>
            </div>
        `;
    } else {
        featuredContentEl.innerHTML = '<p>Featured content unavailable</p>';
    }
}

async function displayGenreRows() {
    for (const genre of genresToShow) {
        const movies = await fetchMovies(`/discover/movie?with_genres=${genre.id}`);
        const row = document.createElement('div');
        row.classList.add('genre-row');
        
        if (movies.length > 0) {
            row.innerHTML = `
                <h3>${genre.name}</h3>
                <div class="movie-slider">
                    ${movies.map(movie => `
                        <div class="movie-card" data-movie-id="${movie.id}">
                            <img src="${movie.poster_path ? imageBaseUrl + movie.poster_path : 'placeholder.jpg'}" alt="${movie.title}">
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            row.innerHTML = `<h3>${genre.name}</h3><p>No movies available for this genre</p>`;
        }
        
        genreRowsEl.appendChild(row);
    }
    addMovieCardListeners();
}

function addMovieCardListeners() {
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        card.addEventListener('click', () => {
            const movieId = card.dataset.movieId;
            displayMovieDetails(movieId);
        });
    });
}

async function displayMovieDetails(movieId) {
    const movie = await fetchMovies(`/movie/${movieId}`);
    if (movie) {
        const modalContent = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-header" style="background-image: url(${imageBaseUrl}${movie.backdrop_path})">
                    <h2>${movie.title}</h2>
                </div>
                <div class="modal-body">
                    <p>${movie.overview || 'No overview available'}</p>
                    <p><strong>Release Date:</strong> ${movie.release_date || 'Unknown'}</p>
                    <p><strong>Rating:</strong> ${movie.vote_average ? movie.vote_average + '/10' : 'Not rated'}</p>
                    <p><strong>Genres:</strong> ${movie.genres ? movie.genres.map(g => g.name).join(', ') : 'Unknown'}</p>
                </div>
            </div>
        `;
        
        movieDetailsEl.innerHTML = modalContent;
        movieDetailsEl.style.display = 'block';
        
        const closeModal = movieDetailsEl.querySelector('.close-modal');
        closeModal.addEventListener('click', () => {
            movieDetailsEl.style.display = 'none';
        });
    } else {
        alert('Movie details unavailable');
    }
}

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
        const searchResults = await fetchMovies(`/search/movie?query=${encodeURIComponent(query)}`);
        displaySearchResults(searchResults);
    }
});

function displaySearchResults(results) {
    genreRowsEl.innerHTML = '<h2>Search Results</h2>';
    if (results.length > 0) {
        const searchRow = document.createElement('div');
        searchRow.classList.add('movie-slider');
        searchRow.innerHTML = results.map(movie => `
            <div class="movie-card" data-movie-id="${movie.id}">
                <img src="${movie.poster_path ? imageBaseUrl + movie.poster_path : 'placeholder.jpg'}" alt="${movie.title}">
                <h3>${movie.title}</h3>
            </div>
        `).join('');
        genreRowsEl.appendChild(searchRow);
        addMovieCardListeners();
    } else {
        genreRowsEl.innerHTML += '<p>No results found</p>';
    }
}

// Initialize the page
displayFeaturedContent();
displayGenreRows();