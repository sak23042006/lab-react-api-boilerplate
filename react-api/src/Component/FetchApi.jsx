import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchApi = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })
      .then((res) => {
        setBooks(res.data.books);
        console.log("data:", books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id} className="book-container">
          <div className="book-details">
            <h2>{book.title}</h2>
            <img src={book.imageLinks.thumbnail} alt="" />
            <p className="authors">Authors: {book.authors.join(", ")}</p>
          </div>
          <div className="book-description">
            <p>{book.description}</p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FetchApi;