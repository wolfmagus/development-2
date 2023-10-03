import React, {useState, useEffect} from "react"
import axios from "axios"
import Movie from "./components/Movie.js"

export default function App(){
    const [movies, setMovies] = useState([])

    //Run the following function when the web page changes/ reloads
    useEffect(()=> {
        //Get all the movies from the database, then set the movies states to that array of movies
        axios.get("/movies")
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
    }, [])//fires once when there is no data that changes placed in the square brackets
    
    //Iterate over the movies array, pass movies array data as props to Movie component and display all the movies
    return (
        <div className="movie-container">
          { movies.map(movie => <Movie {...movie} key={movie.title}/>)}
        </div>
    )
}

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function App() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     axios.get("/movies")
//       .then(res => console.log(res))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       {/* Your component JSX */}
//     </div>
//   );
// }
