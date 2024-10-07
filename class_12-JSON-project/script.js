document.addEventListener('DOMContentLoaded', () => {
    const bookGrid = document.getElementById('bookGrid');
    const searchInput = document.getElementById('search');
    const addBookBtn = document.getElementById('addBookBtn');
    const bookModal = document.getElementById('bookModal');
    const bookForm = document.getElementById('bookForm');
    const reviewsModal = document.getElementById('reviewsModal');
    const closeReviewsModal = document.getElementById('closeReviewsModal');
    const reviewsList = document.getElementById('reviewsList');
    const reviewForm = document.getElementById('reviewForm');
    const reviewBookTitle = document.getElementById('reviewBookTitle');
    const sortCriteria = document.getElementById('sortCriteria');
    const saveBtn = document.getElementById('saveBtn');
    let books = [];
    let filteredBooks = [];
    let currentBookId = null;


    async function loadBooks() {
        try {

            const storedBooks = localStorage.getItem('books');
            let localBooks = storedBooks ? JSON.parse(storedBooks) : [];

            const response = await fetch('books.json');
            const jsonBooks = await response.json();

            const booksMap = new Map();

            jsonBooks.forEach(book => booksMap.set(book.id, book));

            localBooks.forEach(book => booksMap.set(book.id, book));

            books = Array.from(booksMap.values());

            filteredBooks = books;
            displayBooks(filteredBooks);

            localStorage.setItem('books', JSON.stringify(books));
        } catch (error) {
            console.error('Error loading books:', error);
        }
    }

    function saveBooks() {
        localStorage.setItem('books', JSON.stringify(books));
    }

    function deleteBook(bookId) {
    const bookIndex = books.findIndex(b => b.id === bookId);
    if (bookIndex !== -1) {
    
        books.splice(bookIndex, 1);
        
        saveBooks();
        
        filterBooks();
    }
}

function displayBooks(books) {
    bookGrid.innerHTML = '';
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer relative';
        bookCard.dataset.bookId = book.id;
        bookCard.innerHTML = `
            <div class="h-48 w-full object-cover">
                <img src="${book.cover}" alt="${book.title}" class="w-full h-full object-cover">
            </div>
            <div class="p-4">
                <h3 class="text-lg font-bold mb-2">${book.title}</h3>
                <p class="text-muted-foreground mb-2">${book.author}</p>
                <div class="flex items-center mb-2">
                    <svg class="w-5 h-5 fill-primary mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <span class="text-primary font-medium">${book.rating.toFixed(1)}</span>
                </div>
                <p class="text-sm text-muted-foreground">${book.genre} - ${book.year}</p>
            </div>
            <button class="favorite-btn absolute top-2 right-2 ${favoriteBooks.includes(book.id) ? 'text-yellow-500' : 'text-gray-400'} hover:text-yellow-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            </button>
            <button class="delete-book-btn absolute bottom-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
            </button>
        `;
        
        // Add click event for opening reviews
        bookCard.addEventListener('click', (e) => {
            if (!e.target.closest('.favorite-btn') && !e.target.closest('.delete-book-btn')) {
                openReviewsModal(book.id);
            }
        });

        // Add click event for favorite button
        const favoriteBtn = bookCard.querySelector('.favorite-btn');
        favoriteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.favorites.toggleFavorite(book.id);
        });

        // Add click event for delete button
        const deleteBtn = bookCard.querySelector('.delete-book-btn');
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (confirm('Are you sure you want to delete this book? This action cannot be undone.')) {
                deleteBook(book.id);
            }
        });

        bookGrid.appendChild(bookCard);
    });
}   

    

    function filterBooks() {
        const searchTerm = searchInput.value.toLowerCase();
        filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm)
        );
        sortBooks();
        displayBooks(filteredBooks);
    }

    function sortBooks() {
        const criteria = sortCriteria.value;
        filteredBooks.sort((a, b) => {
            if (criteria === 'title') {
                return a.title.localeCompare(b.title);
            } else if (criteria === 'author') {
                return a.author.localeCompare(b.author);
            } else if (criteria === 'rating') {
                return b.rating - a.rating;
            }
        });
    }

    function deleteReview(bookId, reviewIndex) {
        const book = books.find(b => b.id === bookId);
        if (book && book.reviews[reviewIndex]) {

            book.reviews.splice(reviewIndex, 1);


            if (book.reviews.length > 0) {
                book.rating = book.reviews.reduce((acc, review) => acc + review.rating, 0) / book.reviews.length;
            } else {
                book.rating = 0;
            }
            saveBooks();
            openReviewsModal(bookId);
            filterBooks();
        }
    }

    function openReviewsModal(bookId) {
        const book = books.find(b => b.id === bookId);
        currentBookId = bookId;
        reviewBookTitle.textContent = book.title;
        reviewsList.innerHTML = '';
        book.reviews.forEach((review, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'bg-muted rounded-lg p-4 mb-2 relative';
            reviewItem.innerHTML = `
                <div class="flex items-center mb-2">
                    <svg class="w-5 h-5 fill-primary mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <span class="text-primary font-medium">${review.rating}</span>
                    <span class="text-muted-foreground ml-2">${review.user}</span>
                </div>
                <p class="text-sm">${review.comment}</p>
                <button class="delete-review-btn absolute top-2 right-2 text-red-500 hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                </button>
            `;
            const deleteBtn = reviewItem.querySelector('.delete-review-btn');
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent event bubbling
                if (confirm('Are you sure you want to delete this review?')) {
                    deleteReview(bookId, index);
                }
            });
            reviewsList.appendChild(reviewItem);
        });
        reviewsModal.classList.remove('hidden');
    }

    function closeReviewsModalFunc() {
        reviewsModal.classList.add('hidden');
    }

    function createBookCard(book, isFavorite = false) {
        const bookCard = document.createElement('div');
        bookCard.className = 'bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer relative';
        bookCard.dataset.bookId = book.id;
        bookCard.innerHTML = `
            <div class="h-48 w-full object-cover">
                <img src="${book.cover}" alt="${book.title}" class="w-full h-full object-cover">
            </div>
            <div class="p-4">
                <h3 class="text-lg font-bold mb-2">${book.title}</h3>
                <p class="text-muted-foreground mb-2">${book.author}</p>
                <div class="flex items-center mb-2">
                    <svg class="w-5 h-5 fill-primary mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <span class="text-primary font-medium">${book.rating.toFixed(1)}</span>
                </div>
                <p class="text-sm text-muted-foreground">${book.genre} - ${book.year}</p>
            </div>
            <button class="favorite-btn absolute top-2 right-2 ${isFavorite ? 'text-yellow-500' : 'text-gray-400'} hover:text-yellow-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            </button>
        `;
    
        const favoriteBtn = bookCard.querySelector('.favorite-btn');
        favoriteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.favorites.toggleFavorite(book.id);
        });
    
        bookCard.addEventListener('click', () => openReviewsModal(book.id));
    
        return bookCard;
    }

    function populateFavoritesList(favoriteBookIds) {
        const favoritesList = document.getElementById('favoritesList');
        favoritesList.innerHTML = '';
    
        favoriteBookIds.forEach(bookId => {
            const book = books.find(b => b.id === bookId);
            if (book) {
                const bookCard = createBookCard(book, true);
                favoritesList.appendChild(bookCard);
            }
        });
    }

    function convertToDataURL(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }


    function downloadBooksAsJSON() {
        let booksToExport = JSON.parse(JSON.stringify(books));

        booksToExport = booksToExport.map(book => {

            if (book.cover && book.cover.startsWith('data:image')) {

                const fileName = book.title.toLowerCase().replace(/\s+/g, '-') + '.jpg';
                book.cover = `./assets/${fileName}`;
            }


            return {
                id: book.id,
                title: book.title,
                author: book.author,
                genre: book.genre,
                year: book.year,
                rating: book.rating,
                reviews: book.reviews || [],
                cover: book.cover
            };
        });


        const jsonString = JSON.stringify(booksToExport, null, 2);


        const blob = new Blob([jsonString], { type: 'application/json' });


        const url = URL.createObjectURL(blob);


        const link = document.createElement('a');
        link.href = url;
        link.download = 'books.json';
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    document.getElementById('downloadJSONBtn').addEventListener('click', downloadBooksAsJSON);

    searchInput.addEventListener('input', filterBooks);
    sortCriteria.addEventListener('change', filterBooks);
    addBookBtn.addEventListener('click', () => {
        bookModal.classList.remove('hidden');
    });
    closeReviewsModal.addEventListener('click', closeReviewsModalFunc);
    saveBtn.addEventListener('click', () => {
        saveBooks();
        alert('Books saved to local storage!');
    });

    bookForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(bookForm);
        const coverFile = formData.get('cover');
    
        try {
            let coverDataUrl;
            if (coverFile && coverFile.size > 0) {
                // If a file is selected, convert it to a data URL
                coverDataUrl = await convertToDataURL(coverFile);
            } else {
                // If no file is selected, use the default placeholder
                coverDataUrl = "./assets/placeholder.svg";
            }
    
            const newBook = {
                id: Date.now(), // Use timestamp as a unique ID
                title: formData.get('title'),
                author: formData.get('author'),
                genre: formData.get('genre'),
                year: parseInt(formData.get('year')),
                rating: 0,
                reviews: [],
                cover: coverDataUrl // This will be either the uploaded image or the placeholder
            };
    
            books.push(newBook);
            saveBooks(); // Save to local storage
            filterBooks();
            window.favorites.updateFavoriteButton(newBook.id);
            bookModal.classList.add('hidden');
            bookForm.reset();
        } catch (error) {
            console.error('Error saving book:', error);
            alert('There was an error saving the book. Please try again.');
        }
    });

    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newReview = {
            user: reviewForm.reviewUser.value,
            rating: parseInt(reviewForm.reviewRating.value),
            comment: reviewForm.reviewComment.value
        };
        const book = books.find(b => b.id === currentBookId);
        book.reviews.push(newReview);
        book.rating = book.reviews.reduce((acc, review) => acc + review.rating, 0) / book.reviews.length;
        saveBooks(); // Save updated books to local storage
        filterBooks();
        openReviewsModal(currentBookId);
        reviewForm.reset();
    });

    window.favorites.initializeFavorites();
    window.populateFavoritesList = populateFavoritesList;
    loadBooks();
});