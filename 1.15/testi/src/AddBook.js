import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from './reducers/bookReducer';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.author.value)
    console.log(event.target.title.value)
  }

  return (
    <form onSubmit={() => handleSubmit()}>
      <div>
        title:
        <input 
          name="title"
        />
        author:
        <input
          name="author"
        />
        <button> Add </button>
      </div>
    </form>
  )
}

export default AddBook;