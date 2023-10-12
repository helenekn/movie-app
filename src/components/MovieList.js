import { MovieItem } from './MovieItem';

function MovieList(props) {
   const {movieList} = props;

   return (
    <section className="movies">
        {movieList.map(movie => (
            <MovieItem key={movie.imdbID} {...movie}/>
        ))}

    </section>
   )
}

export { MovieList };

