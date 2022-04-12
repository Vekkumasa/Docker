import { getBooks, addBook as addaa } from "../utils/request";

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT':
      return action.data
    case 'ADD':
      console.log('action', action.data)
      return [state, action.data]
    default:
      return state
  }
}

export const initializeBooks = () => {
  return async dispatch => {
    const data = await getBooks()
    dispatch({
      type: 'INIT',
      data
    })
  }
}

export const addBook = ({ title, author }) => {
  console.log("Addbook", title, author)
  return async dispatch => {
    const book = await addaa(title, author)
    dispatch({
      type: 'ADD',
      data: book
    })
  }
}

export default reducer