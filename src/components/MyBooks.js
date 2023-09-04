import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <header className="bg-secondary-subtle">
    <nav className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img
          src={`${process.env.PUBLIC_URL}lms.jpg`}
          alt="MY LIBRARY"
          width="100px"
          height="100px"
          className="mr-2"
        />
        <h1 className="mb-0" style={{ color: 'black' }}><b>MY LIBRARY</b></h1>
      </div>
      <ul className="d-flex align-items-center">
        <li>
          <Link to="/" className="btn btn-outline-primary">Home</Link>
        </li>
       
        <li>
          <Link to="/Login" className="btn btn-outline-primary hover-button">Login</Link>
        </li>
        <li>
          <Link to="/Signup" className="btn btn-outline-primary hover-button">Sign Up</Link>
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

  // Use useEffect to fetch user's books from an API or database
  useEffect(() => {
    // Example: Fetch user's books from an API
    fetch('API_ENDPOINT_TO_GET_USER_BOOKS')
      .then((response) => response.json())
      .then((data) => setMyBooks(data))
      .catch((error) => console.error('Error fetching user books:', error));
  }, []);

  return (
    <div className="wrapper  bg-primary-subtle">
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




