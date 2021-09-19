import React from 'react'

class Movie extends React.Component {

  render() {
    const { movie, genres } = this.props
    const movieGenres = []

    for (const genre of genres) {
      if (genre && movie.genre_ids.includes(genre.id)) {
        movieGenres.push(genre.name)
      }
    }
    return (
      <div className='flex-wrap border-solid justify-center p-8 whitespace-nowrap rounded-lg shadow-lg bg-gray-200'>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className='rounded-lg'
          alt={movie.title} />
        <h1 className=' tracking-tight text-center font-bold leading-loose uppercase whitespace-normal'>
          {movie.title}
        </h1>
        <p className=' h-20 text-center leading-loose overflow-y-auto rounded-lg whitespace-pre-line border-1'>
          {movie.overview}
        </p>
        <div className='flex justify-between whitespace-normal'>
          <h2 className='p-8'>{movie.vote_average}</h2>
          <h2 className='p-8'>{movie.release_date}</h2>
        </div>
        <div className='flex justify-center'>
          {movieGenres.map(genre => {
            return <div key={genre} genres={genre}
              className='flex p-1 m-1 w-1/4 bg-gray-300 justify-center rounded-full py-1 px-3 float-left'>
              {genre}
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default Movie
