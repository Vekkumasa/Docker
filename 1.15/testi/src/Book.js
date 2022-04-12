import React from 'react';
import { useSelector } from 'react-redux';
import './Styles/Book.css';

const Book = ({ book }) => {
  return (
    <div className="book">
      {book.title} - {book.author}
    </div>
  )
}

export default Book;