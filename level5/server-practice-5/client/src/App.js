import React, {useState, useEffect} from "react"
import axios from "axios"
import Movie from "./components/Movie.js"
import AddMovieForm from "./components/AddMovieForm.js"

export default function App(){
    const [movies, setMovies] = useState([])
    //Error can be saved in state and placed in a pop up
// The requests here on the frontend are going through the proxy and being sent to backend
// The data is being served from the backend and stored on the frontend in movies state


    // function getMovies(){
    // //Get all the movies from the database, then set the movies states to that array of movies
    //     axios.get("/movies")
    //     .then(res => setMovies(res.data))
    //     .catch(err => console.log(err.response.data.errMsg))
    // }

    function getMovies() {
        // Get all the movies from the database, then set the movies states to that array of movies
        axios.get("/movies")
            .then(res => {
                setMovies(res.data);
                console.log(res.data); // Move the console.log inside the 'then' block
            })
            .catch(err => console.log(err.response.data.errMsg));
    }
    
//post a new movie with the previous four movies and a new movie added
    function addMovie(newMovie){
        axios.post("/movies", newMovie)
        .then(res => {
            setMovies(prevMovies => [...prevMovies, res.data])
        })
        .catch(err => console.log(err))
    }
// Updating the backend and then filtering the movie out on the frontend
    function deleteMovie(movieId){
        axios.delete(`/movies/${movieId}`)//backend
        .then(res => {
            setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))//frontend
        })
        .catch(err => console.log(err))
    }

    // function editMovie(updates, movieId){
    //     axios.put(`/movies/${movieId}`, updates)
    //     .then(res =>{
    //         console.log("Updated Movie Data!!!", res.data)
    //         setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie: res.data))
    //     })
    //     .catch(err => console.log(err))

    // }

    function editMovie(updates, movieId){
        axios.put(`/movies/${movieId}`, updates)
        .then(res => {
            console.log("Updated Movie Data!!!", res.data)
            setMovies(prevMovies => 
                prevMovies.map(movie => 
                    movie._id !== movieId ? movie : res.data
                )
            );
        })
        .catch(err => console.log(err));
    }
    
    function handleFilter(e){
        if(e.target.value === "reset"){
            getMovies()
        } else{
            axios.get(`/movies/search/genre?genre=${e.target.value}`)
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
        }
    }
    
    //Run the following function when the web page changes/ reloads
    useEffect(()=> {
        getMovies()
    }, [])//fires once when there is no data that changes placed in the square brackets
    
    //Iterate over the movies array, pass movies array data as props to Movie component and display all the movies
    return (
        <div className="movie-container">
            <AddMovieForm
                submit={addMovie}
                btnText="Add Movie"
            />

        <h4>Filter By Genre</h4>
        <select onChange={handleFilter} className="filter-form">
            <option value="reset">All Movies</option>
            <option value="action">Action</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
        </select>
        
          {
           movies.map(movie =>
            <Movie
             {...movie}
              key={movie._id}
              deleteMovie={deleteMovie}
              editMovie={editMovie}/>)}
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