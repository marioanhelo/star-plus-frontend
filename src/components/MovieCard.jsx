import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({id,image}) => {
  return (
    <div data-id={id} className="movieCard max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" key={id}>
                <Link
                  to="/movie-details"
                  state={{ id: id}}>
                  <img className="rounded-t-lg" src={image} />
                </Link>
            </div>
  )
}

export default MovieCard