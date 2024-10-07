// favorites.js

let favoriteBooks = [];

function initializeFavorites() {
    // Load favorites from localStorage
    const storedFavorites = localStorage.getItem('favoriteBooks');
    favoriteBooks = storedFavorites ? JSON.parse(storedFavorites) : [];

    // Add favorite button to the main UI
    const header = document.querySelector('header');
    const favoriteBtn = document.createElement('button');
    favoriteBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
        Favorites
    `;
    favoriteBtn.className = 'bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors flex items-center';
    favoriteBtn.addEventListener('click', openFavoritesModal);
    header.appendChild(favoriteBtn);

    // Create favorites modal
    const favoritesModal = document.createElement('div');
    favoritesModal.id = 'favoritesModal';
    favoritesModal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden';
    favoritesModal.innerHTML = `
        <div class="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h2 class="text-2xl font-bold mb-4">Favorite Books</h2>
            <div id="favoritesList" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"></div>
            <button id="closeFavoritesModal" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Close</button>
        </div>
    `;
    document.body.appendChild(favoritesModal);

    document.getElementById('closeFavoritesModal').addEventListener('click', closeFavoritesModal);
}

function toggleFavorite(bookId) {
    const index = favoriteBooks.indexOf(bookId);
    if (index === -1) {
        favoriteBooks.push(bookId);
    } else {
        favoriteBooks.splice(index, 1);
    }
    localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
    updateFavoriteButton(bookId);
}

function updateFavoriteButton(bookId) {
    const bookCard = document.querySelector(`[data-book-id="${bookId}"]`);
    if (bookCard) {
        const favoriteBtn = bookCard.querySelector('.favorite-btn');
        if (favoriteBooks.includes(bookId)) {
            favoriteBtn.classList.add('text-yellow-500');
            favoriteBtn.classList.remove('text-gray-400');
        } else {
            favoriteBtn.classList.remove('text-yellow-500');
            favoriteBtn.classList.add('text-gray-400');
        }
    }
}

function openFavoritesModal() {
    const favoritesModal = document.getElementById('favoritesModal');
    const favoritesList = document.getElementById('favoritesList');
    favoritesList.innerHTML = '';

    // We'll call a function from the main script to populate the favorites list
    window.populateFavoritesList(favoriteBooks);

    favoritesModal.classList.remove('hidden');
}

function closeFavoritesModal() {
    const favoritesModal = document.getElementById('favoritesModal');
    favoritesModal.classList.add('hidden');
}

// Export functions to be used in the main script
window.favorites = {
    initializeFavorites,
    toggleFavorite,
    updateFavoriteButton,
    favoriteBooks
};