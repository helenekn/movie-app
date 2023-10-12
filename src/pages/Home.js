import React from 'react';
import { MovieList } from '../components/MovieList';
import { Preloader } from '../components/Preloader';
import { InputSearch } from '../components/InputSearch';


const API_KEY = process.env.REACT_APP_API_KEY;

class Home extends React.Component {
    state = {
        movieList: [],
        loading: true,
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=titanic`)
            .then(response => response.json())
            .then(data => this.setState({movieList: data.Search, loading: false}))
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)


        // http://www.omdbapi.com/?apikey=545d2dce&s=&titanic&type=series

        
            .then(response => response.json())
            .then(data => this.setState({movieList: data.Search, loading: false}))
    }
 
    render() {
        const { movieList, loading } = this.state;
        return (
            <main className='main container'>
                <InputSearch searchMovies={this.searchMovies}/>
                {
                    loading ? <Preloader />
                        : (<MovieList movieList={this.state.movieList} />)
                }
            </main>
        )
    }
}

export { Home };