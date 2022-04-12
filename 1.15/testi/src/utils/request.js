import axios from 'axios';

const baseUrl = "http://localhost:3001"

const getAuthors = async () => {
  const authors = await axios.get(`${baseUrl}/authors`);
  return authors.data
}

const getBooks = async () => {
  const books = await axios.get(`${baseUrl}/books`);
  return books.data
};

const addBook = async ({ title, author }) => {
  console.log(title, author)
  const response = await axios.post(`${baseUrl}/books`, { title, author })
  return response.data
}

export { getBooks, getAuthors, addBook }