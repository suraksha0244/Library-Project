import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import MyBooks from "./components/MyBooks";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [booksCollection, setBooksCollection] = React.useState([]);
  const [user, setUser] = React.useState(null);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                booksCollection={booksCollection}
                setBooksCollection={setBooksCollection}
                user={user}
                setUser={setUser}
              />
            }
          />
          <Route
            exact
            path="/MyBooks"
            element={
              <MyBooks
                booksCollection={booksCollection}
                setBooksCollection={setBooksCollection}
                user={user}
              />
            }
          />
          <Route exact path="/Signup" element={<Signup setUser={setUser} />} />
          <Route exact path="/Login" element={<Login setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
