import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import libLogo from '../components/images/lib logo.png';


function Header() {
  return (
    <header className="bg-secondary-subtle header-with-background">
      <nav className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src={libLogo}
            alt="MY LIBRARY"
            width="100px"
            height="100px"
            className="mr-2"
          />
          <div className="library-card">
            <h1 className="mb-0" style={{ color: 'white' }}><b>The LearnUp</b></h1>
          </div>
        </div>
        <ul className="d-flex align-items-center">
          <li>
            <Link to="/" className="btn btn-danger btn-lg">Home</Link>
          </li>
         
         
         
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="fixed-footer">
      <nav>
        <ul>
          <p>&copy; 2023 MY LIBRARY </p>
        </ul>
      </nav>
    </footer>
  );
}

function MyBooks() {
  const [myBooks, setMyBooks] = useState([]);
  const [userCollection, setUserCollection] = useState([]);
  // Use useEffect to fetch user's books from an API or database
  useEffect(() => {
    // Example: Fetch user's books from an API
    fetch('API_ENDPOINT_TO_GET_USER_BOOKS')
      .then((response) => response.json())
      .then((data) => setMyBooks(data))
      .catch((error) => console.error('Error fetching user books:', error));
  }, []);

 // Use useEffect to retrieve user's collection from localStorage
 useEffect(() => {
  const collectionFromStorage = JSON.parse(localStorage.getItem('userCollection')) || [];
  setUserCollection(collectionFromStorage);
}, []);

const removeFromCollection = (bookId) => {
  // Remove the book with the given id from user's collection
  const updatedCollection = userCollection.filter((book) => book.id !== bookId);
  setUserCollection(updatedCollection);
  localStorage.setItem('userCollection', JSON.stringify(updatedCollection)); // Update localStorage
};


  return (
    <div className="wrapper  bg-secondary-subtle">
      <Header />
      <main>
        <hr />
        <center>
          <h1>My Books</h1>
          <hr />
          <h2>My Collection</h2>
          <div className="container">
            <div className="row">
              {myBooks.map((book) => (
                <div key={book.id} className="col-md-4 mb-4">
                  <div className="card">
                    <img src={book.image} className="card-img-top" alt={`Book ${book.id}`} />
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                      <p className="card-text">{book.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </center>
      </main>
      <Footer />
    </div>
  );
}

export default MyBooks;