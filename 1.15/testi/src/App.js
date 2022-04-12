import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Books from './Books';
import Book from './Book';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { initializeBooks } from './reducers/bookReducer';

import AddBook from './AddBook';
import "./Styles/App.css";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(initializeBooks())
  },[])

  return ( 
    <div>
      <Router>
        <div className="header"> Books and Authors </div>
        <Routes>
          <Route path="/books" element={<Books />}/>
          <Route path="/book" element={<Book />}/>
        </Routes>
      </Router>
      <AddBook />
    </div>
    
  )
}

export default App;
