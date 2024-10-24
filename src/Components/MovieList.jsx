import { useState, useEffect } from "react";
import axios from "axios";
import "./Movielist.css";
import Searchbar from "./Searchbar";
import Movieone from "./Movieone";
const MovieList2 = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const getMovies = () => {
    axios
      .get("https://jsonfakery.com/movies/simple-paginate")
      .then((res) => {
        console.log(res.data.data);
        setMovies(res.data.data);
        setFilteredMovies(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filtered = movies.filter((movie) =>
        movie.original_title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }
  };

  return (
    <div className="container">
      <h1>Movie List</h1>
      <div>
        <Searchbar onSearch={handleSearch} />
      </div>
      <br />
      {filteredMovies?.map((movie) => (
        <div className="movielist" key={movie.movie_id}>
          <h1>Title: {movie.original_title}</h1>
          <h2>Language: {movie.original_language}</h2>
          <p>Popularity: {movie.popularity}</p>
          <p>Released: {movie.release_date}</p>
          <p>Votes Average: {movie.vote_average}</p>
          <p>Votes Count: {movie.vote_count}</p>
          <p>{movie.Actors}</p>
          <a href={"/movies/" + movie.movie_id}>
            <Movieone id={movie.movie_id} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default MovieList2;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./Movielist.css";
// const MovieList = () => {
//   const [movies, setMovies] = useState([]);
//   const getquote = () => {
//     axios
//       .get("https://jsonfakery.com/movies/simple-paginate")
//       .then((res) => {
//         console.log(res.data.data);
//         setMovies(res.data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   useEffect(() => {
//     getquote();
//   }, []);
//   return (
//     <div className="container">
//       <h1>Movie List</h1>
//       <br />
//       {movies?.map((movie) => {
//         return (
//           <div className="movielist" key={movie.movie_id}>
//             <h1>title: {movie.original_title}</h1>
//             <h2>language: {movie.original_language}</h2>
//             <p>popularity: {movie.popularity}</p>
//             <p>released: {movie.release_date}</p>
//             <p>votes average: {movie.vote_average}</p>
//             <p>votes count: {movie.vote_count}</p>
//             <p>{movie.Actors}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default MovieList;
