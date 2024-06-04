import React from 'react';

const BookCard = ({ book, onAdd, onRemove }) => {
  const { title, author_name, cover_i } = book;

  return (
    <div className="border rounded shadow p-4 flex flex-col items-center">
      {cover_i ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
          alt={title}
          className="w-full h-48 object-cover mb-4"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center mb-4">
          <span>No Image</span>
        </div>
      )}
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-700">{author_name?.join(', ')}</p>
      {onAdd && (
        <button
          onClick={() => onAdd(book)}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add to Bookshelf
        </button>
      )}
      {onRemove && (
        <button
          onClick={() => onRemove(book)}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
        >
          Remove from Bookshelf
        </button>
      )}
    </div>
  );
};

export default BookCard;
