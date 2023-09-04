
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import mockingbirdImage from '../components/images/mockingbird.png';
import duneImage from '../components/images/dune.png';
import onenineImage from '../components/images/1984.png';
import alllightImage from '../components/images/all the light we cannot see.png';
import braveImage from '../components/images/brave new world.png';
import endersImage from '../components/images/enders game.png';
import alchemistImage from '../components/images/the alchemist.png';
import nightingaleImage from '../components/images/the nightingale.png';
import booktImage from '../components/images/the book thief.png';
import cathcherImage from '../components/images/the catcher rye.png';
import greatImage from '../components/images/the great gtasby.png';
import hunterImage from '../components/images/the hunter games.png';



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
            <Link to="/MyBooks" className="btn btn-outline-primary">My Books</Link>
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

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const books = [
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      description: 'Set in the racially charged American South during the 1930s, this novel follows young Scout Finch as she learns about justice, morality, and empathy while her father defends an innocent Black man accused of raping a white woman.',
     
      image: mockingbirdImage,

      Author: 'Harper Lee',
      Genre: 'Classic Literature, Coming-of-Age, Historical Fiction, Legal Drama, Southern Gothic',
      PublicationDate: '1960',
      link: '/MyBooks', // Link to My Books section
      color: 'bg-warning-subtle',
    },
    {
      id: 2,
      title: '1984',
      Author: 'George Orwell',
      Genre: 'Dystopian Fiction, Classic Literature, Political Fiction, Science Fiction, Social Commentary',
      description: 'In a totalitarian society where Big Brother watches your every move, Winston Smith rebels against the oppressive regime by secretly writing a diary and falling in love, sparking a dangerous journey of rebellion.',
      PublicationDate: '1949',
      image:onenineImage,
      link: '/MyBooks',
      color: 'bg-danger-subtle',
    },
    {
      id: 3,
      title: 'The Great Gatsby',
      description: 'Amidst the decadence of the Roaring Twenties, Jay Gatsby throws extravagant parties in the hope of rekindling a romance with Daisy Buchanan, exploring themes of wealth, love, and the American Dream.',
      image: greatImage,
      link: '/MyBooks',
      color: 'bg-secondary-subtle',
      Author: 'F. Scott Fitzgerald',
      Genre: 'Classic Literature, Jazz Age, Romance, Tragedy, American Dream',
      PublicationDate: '1925'
      
    },
    {
      id: 4,
      title: 'Brave New World',
      Author: 'Aldous Huxley',
      Genre: 'Dystopian Fiction, Science Fiction, Social Commentary, Psychological Fiction, Futuristic',
      description: 'In a future world of genetic engineering and consumerism, citizens are conditioned for conformity and happiness, but a dissenter named John challenges this controlled existence.',
      PublicationDate: '1932',
      image: braveImage,
      link: '/MyBooks',
      color: 'bg-warning-subtle',
    },
    {
      id: 5,
      title: 'The Hunger Games',
      Author: 'Suzanne Collins',
      Genre: 'Dystopian Fiction, Young Adult, Science Fiction, Action & Adventure, Survival',
      description: 'In a post-apocalyptic world, Katniss Everdeen volunteers to participate in the brutal Hunger Games, a televised fight to the death among young tributes from the oppressed districts.',
      PublicationDate: '2008',
      image: hunterImage,
      link: '/MyBooks',
      color: 'bg-danger-subtle',
    },
    {
      id: 6,
      title: 'The Catcher in the Rye',
      Author: 'J.D. Salinger',
      Genre: 'Coming-of-Age, Bildungsroman, American Literature, Teenage Angst, Psychological Fiction',
      description: 'Holden Caulfields journey through New York City explores themes of teenage rebellion, isolation, and the search for authenticity in a world he sees as phony.',
      PublicationDate: '1951',
      image:cathcherImage,
      link: '/MyBooks',
      color: 'bg-secondary-subtle',
    },
    {
      id: 7,
      title: 'The Alchemist',
      Author: 'Paulo Coelho',
      Genre: 'Coming-of-Age, Adventure, Quest, Inspirational, Philosophical',
      description: 'Santiagos quest for a hidden treasure takes him on a journey of self-discovery, spiritual awakening, and understanding the language of the universe.',
      PublicationDate: '1988',
      image: alchemistImage,
      link: '/MyBooks',
      color: 'bg-warning-subtle',
    },
    {
      id: 8,
      title: 'The Book Thief',
      Author: 'Markus Zusak',
      Genre: 'Historical Fiction, World War II, Young Adult, Death Narrator, Holocaust',
      description: 'Set in Nazi Germany, this story narrated by Death follows Liesel Meminger, a young girl who steals books to share with others and find solace during WWII.',
      PublicationDate: '2005',
      image:booktImage,
      link: '/MyBooks',
      color: 'bg-danger-subtle',
    },
    {
      id: 9,
      title: 'All the Light We Cannot See',
      Author: 'Anthony Doerr',
      Genre: 'Historical Fiction, World War II, Pulitzer Prize, Blind Protagonist, Survival',
      description: 'This Pulitzer Prize-winning novel intertwines the lives of a blind French girl and a German boy during WWII, exploring the power of human resilience and connection',
      PublicationDate: '2014',
      image: alllightImage,
      link: '/MyBooks',
      color: 'bg-secondary-subtle',
    },
    {
      id: 10,
      title: 'The Nightingale',
      Author: 'Kristin Hannah',
      Genre: 'Historical Fiction, World War II, Sisters, Resistance, Womens Fiction',
      description: 'Two sisters in Nazi-occupied France face extraordinary challenges as they join the resistance, highlighting the strength of women during wartime.',
      PublicationDate: '2015',
      image: nightingaleImage,
      link: '/MyBooks',
      color: 'bg-warning-subtle',
    },
    {
      id: 11,
      title: 'Dune',
      Author: 'Frank Herbert',
      Genre: 'Science Fiction, Space Opera, Political Intrigue, Environmental Themes, Epic',
      description: 'In a distant future where noble families control desert planets, young Paul Atreides becomes embroiled in political intrigue, prophecy, and the struggle for the planet Arrakis.',
      PublicationDate: '1965',
      image: duneImage,
      link: '/MyBooks',
      color: 'bg-danger-subtle',
    },
    {
      id: 12,
      title: "Ender's Game",
      Author: 'Orson Scott Card',
      Genre: 'Science Fiction, Military Science Fiction, Young Adult, Space Battle, Leadership',
      description: 'Gifted children are trained in a military school to prepare for a future alien invasion, with young Ender Wiggin emerging as a brilliant strategist.',
      PublicationDate: '1985',
      image: endersImage,
      link: '/MyBooks',
      color: 'bg-secondary-subtle',
    },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBooks = books.filter((book) => {
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
    <div className="wrapper bg-primary-subtle">
      <Header />
      <main>
        <hr />
        <center>
          <h1>Welcome!!</h1>
          <hr />
          <h5>"Explore, Discover, and Dive into the World of Knowledge with MY LIBRARY"</h5>
          <h2>Library Books</h2>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by title, author, or genre"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          <div className="container">
            <div className="row">
              {filteredBooks.map((book) => (
                <div key={book.id} className="col-md-4 mb-4">
                  <div className={`card ${book.color}`}>
                    <img src={book.image} className="card-img-top" alt={`Book ${book.id}`} />
                    <div className="card-body" style={{ textAlign: 'left' }}>
                      <h5 className="card-title">{book.title}</h5>
                      <p className="card-text text-left">
                        <strong>Author:</strong> {book.Author}<br />
                        <strong>Genre:</strong> {book.Genre}<br />
                        <strong>Publication Date:</strong> {book.PublicationDate}<br />
                        {book.description}
                      </p>
                      <div className="card-footer text-right">
                        <Link to={book.link} className="btn btn-outline-primary">Add to Collection</Link>
                      </div>
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

export default Home;