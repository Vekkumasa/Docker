import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Book from './Book';
import './Styles/Books.css';

const Books = () => {
  const books = useSelector(state => state.books)

  const renderBooks = () => {
    console.log('books.js', books)
    return(
      <>
        {books.map(book => (
          <div className="container" key={book.id}>
            <Link to="/book">
              <Book key={book.id} book={book}/>
            </Link>
          </div>   
        ))}
      </>
    )
  }
  return (
    <div>
      {books && renderBooks()}
    </div>
  )
};

export default Books