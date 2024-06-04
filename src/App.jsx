import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearchPage from './components/BookSearchPage';
import BookshelfPage from './components/BookshelfPage';
// import './tailwind.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookSearchPage />} />
        <Route path="/bookshelf" element={<BookshelfPage />} />
      </Routes>
    </Router>
  );
}

export default App;
