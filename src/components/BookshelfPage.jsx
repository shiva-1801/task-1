import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  const handleRemoveFromBookshelf = (bookToRemove) => {
    const updatedBookshelf = bookshelf.filter(book => book.key !== bookToRemove.key);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Bookshelf</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {bookshelf.map((book, index) => (
          <BookCard key={index} book={book} onRemove={handleRemoveFromBookshelf} />
        ))}
      </div>
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
        onClick={() => window.location.href = '/'}
      >
        Go to Main Page
      </button>
    </div>
  );
};

export default BookshelfPage;
