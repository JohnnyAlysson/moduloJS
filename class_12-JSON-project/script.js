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
          books = storedBooks ? JSON.parse(storedBooks) : [];
          filteredBooks = books;
          displayBooks(filteredBooks);
      } catch (error) {
          console.error('Error loading books:', error);
      }
  }

  function saveBooks() {
      localStorage.setItem('books', JSON.stringify(books));
  }

  function displayBooks(books) {
      bookGrid.innerHTML = '';
      books.forEach(book => {
          const bookCard = document.createElement('div');
          bookCard.className = 'bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer';
          bookCard.innerHTML = `
              <div class="h-48 w-full object-cover">
                  <img src="${book.cover}" alt="${book.title}" class="w-full h-full object-cover">
              </div>
              <div class="p-4">
                  <h3 class="text-lg font-bold mb-2">${book.title}</h3>
                  <p class="text-muted-foreground mb-2">${book.author}</p>
                  <div class="flex items-center mb-2">
                      <svg class="w-5 h-5 fill-primary mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      <span class="text-primary font-medium">${book.rating}</span>
                  </div>
                  <p class="text-sm text-muted-foreground">${book.genre} - ${book.year}</p>
              </div>
          `;
          bookCard.addEventListener('click', () => {
              openReviewsModal(book.id);
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

  function openReviewsModal(bookId) {
      const book = books.find(b => b.id === bookId);
      currentBookId = bookId;
      reviewBookTitle.textContent = book.title;
      reviewsList.innerHTML = '';
      book.reviews.forEach(review => {
          const reviewItem = document.createElement('div');
          reviewItem.className = 'bg-muted rounded-lg p-4 mb-2';
          reviewItem.innerHTML = `
              <div class="flex items-center mb-2">
                  <svg class="w-5 h-5 fill-primary mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <span class="text-primary font-medium">${review.rating}</span>
                  <span class="text-muted-foreground ml-2">${review.user}</span>
              </div>
              <p class="text-sm">${review.comment}</p>
          `;
          reviewsList.appendChild(reviewItem);
      });
      reviewsModal.classList.remove('hidden');
  }

  function closeReviewsModalFunc() {
      reviewsModal.classList.add('hidden');
  }

  function convertToDataURL(file) {
      return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
      });
  }

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
          const coverDataUrl = await convertToDataURL(coverFile);

          const newBook = {
              id: Date.now(), // Use timestamp as a unique ID
              title: formData.get('title'),
              author: formData.get('author'),
              genre: formData.get('genre'),
              year: parseInt(formData.get('year')),
              rating: 0,
              reviews: [],
              cover: coverDataUrl // Store the image as a data URL
          };

          books.push(newBook);
          saveBooks(); // Save to local storage
          filterBooks();
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

  loadBooks();
});