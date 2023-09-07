import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import libLogo from "../components/images/lib logo.png";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
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
            <h1 className="mb-0" style={{ color: "white" }}>
              <b>The LearnUp</b>
            </h1>
          </div>
        </div>
        <ul className="d-flex align-items-center">
          <li>
            <Link to="/" className="btn btn-danger btn-lg">
              Home
            </Link>
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
          <p>&copy; 2023 THE LEARNUP </p>
        </ul>
      </nav>
    </footer>
  );
}

function MyBooks({ user }) {
  let navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    if (!user) return navigate("/Login");
    axios.get(`${baseUrl}/getbooks?userId=${user.id}`).then((res) => {
      console.log(res.data);
      setBooks(res.data.books);
    });
  }, [flag]);
  const removeFromCollection = (bookId) => {
    axios
      .post(`${baseUrl}/deletebook`, { bookId, userId: user.id })
      .then(() => {
        toast.error("Book removed from collection!");
        setFlag((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Book is not removed from collection!");
      });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter the userCollection based on the search query
  const filteredCollection = books.filter((book) => {
    const lowerSearchQuery = searchQuery.toLowerCase();
    const lowerTitle = book.title.toLowerCase();
    const lowerAuthor = book.Author.toLowerCase();
    const lowerGenre = book.Genre.toLowerCase();

    return (
      lowerTitle.includes(lowerSearchQuery) ||
      lowerAuthor.includes(lowerSearchQuery) ||
      lowerGenre.includes(lowerSearchQuery)
    );
  });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="wrapper bg-secondary-subtle">
        <Header />
        <main>
          <hr />
          <center>
            <h1>My Books</h1>
            <hr />
            <h2>My Collection</h2>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search by title, author, or genre"
                value={searchQuery}
                onChange={handleSearchChange}
                className="form-control"
              />
            </div>
            <div className="container">
              <div className="row">
                {filteredCollection.map((book) => (
                  <div key={book.id} className="col-md-4 mb-4">
                    <div className="card">
                      <img
                        src={book.image}
                        className="card-img-top"
                        alt={`Book ${book.id}`}
                      />
                      <div
                        className="card-body"
                        style={{ textAlign: "left !important" }}
                      >
                        <h5 className="card-title">
                          <b>{book.title}</b>
                        </h5>
                        <p className="card-text text-left">
                          <strong>Author:</strong> {book.Author}
                          <br />
                          <strong>Genre:</strong> {book.Genre}
                          <br />
                          <strong>Publication Date:</strong>{" "}
                          {book.PublicationDate}
                          <br />
                          <strong>Description:</strong> {book.description}
                        </p>
                      </div>
                      <div className="card-footer text-right">
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => removeFromCollection(book._id)}
                        >
                          Remove
                        </button>
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
    </>
  );
}

export default MyBooks;