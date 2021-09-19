import React from 'react'
import Movie from './movie'
import axios from 'axios'
require('dotenv').config();

const discoverUrl = 'https://api.themoviedb.org/3/discover/movie'
const genresUrl = 'https://api.themoviedb.org/3/genre/movie/list'
class Movies extends React.Component {
    state = {
        movies: [],
        genres: []
    };

    async componentDidMount() {
        const movies = await axios.get(discoverUrl, {
            params: {
                api_key: process.env.REACT_APP_API_TOKEN,
                sort_by: 'popularity.desc'
            }
        })
            .then(data => data['data']['results']);

        const genres = await axios.get(genresUrl, {
            params: {
                api_key: process.env.REACT_APP_API_TOKEN
            }
        })
            .then(data => data['data']['genres']);

        this.setState({
            movies,
            genres
        })
    }
    render() {
        if (!this.state.movies && !this.state.genres) {
            return (<div></div>)
        }
        return (
            <div className='grid grid-cols-3 gap-8 p-5 m-8 rounded'>
                {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} genres={this.state.genres} />)}
            </div>
        )
    }
}

export default Movies