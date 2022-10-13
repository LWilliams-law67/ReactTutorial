//import logo from './logo.svg';
import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './Search.svg';
import MovieCard from './MovieCard.jsx';

// API KEY: a5d879e5
const OMDB_API = 'http://www.omdbapi.com?apikey=a5d879e5';

// const movie1 = {
//   "Title": "Italian Spiderman",
//   "Year": "2007",
//   "imdbID": "tt2705436",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
// }

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${OMDB_API}&s=${title}`);
    const movieData = await response.json();

    setMovies(movieData.Search);
  }

  useEffect(() => {
    setSearchTerm('marvel');
    searchMovies('marvel');
  }, []);

  return (
    <div className='app'>
      <h1>Welcome to Movie Land!</h1>
      <div className='search'>
        <input
          placeholder='Search for movie titles'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='Search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0 ?
          (
            <div className='container'>
              {
                movies.map((movie) => {
                  return (
                    <MovieCard movie={movie} />
                  )
                })
              }
            </div>
          ) : (
            <div className='empty'>
              <h2>No search results found!</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;