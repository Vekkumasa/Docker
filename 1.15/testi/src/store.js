import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import bookReducer from './reducers/bookReducer';

const reducer = combineReducers({
  books: bookReducer
})

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);