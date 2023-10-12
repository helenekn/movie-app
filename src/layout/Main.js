import React from "react";
import { MovieList } from "../components/MovieList";
import { Preloader } from "../components/Preloader";
import { InputSearch } from "../components/InputSearch";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
   state = {
      movieList: [],
   };

   componentDidMount() {
      fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=titanic`)
         .then((response) => response.json())
         .then((data) => this.setState({ movieList: data.Search }));
   }

   searchMovies = (str, type = "all") => {
      fetch(
         `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
            type !== "all" ? `&type=${type}` : ""
         }`
      )
         // http://www.omdbapi.com/?apikey=545d2dce&s=&titanic&type=series

         .then((response) => response.json())
         .then((data) => this.setState({ movieList: data.Search }));
   };

   render() {
      const { movieList } = this.state;
      return (
         <main className="main container">
            <InputSearch searchMovies={this.searchMovies} />
            {movieList.length ? (
               <MovieList movieList={this.state.movieList} />
            ) : (
               <Preloader />
            )}
         </main>
      );
   }
}

export { Main };
