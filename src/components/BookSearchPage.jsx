import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BookSearchPage = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async (q) => {
    if (!q) {
      setBooks([]);
      return;
    }
    const response = await axios.get(`https://openlibrary.org/search.json?q=${q}&limit=10&page=1`);
    setBooks(response.data.docs);
  };

  const handleAddToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    if (!bookshelf.some(b => b.key === book.key)) {
      bookshelf.push(book);
      localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          searchBooks(e.target.value);
        }}
        placeholder="Search for a book"
        className="w-full p-2 border rounded"
      />
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {books.slice(0, 10).map((book) => (
          <BookCard key={book.key} book={book} onAdd={handleAddToBookshelf} />
        ))}
      </div>
      <button
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
        onClick={() => window.location.href = '/bookshelf'}
      >
        Go to My Bookshelf
      </button>
    </div>
  );
};

export default BookSearchPage;
