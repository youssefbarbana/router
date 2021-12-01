import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function MovieDescription() {
    const location = useLocation()
  const { movie } = location.state

    return (
        <div>
           <h1>{movie.movie.description}</h1>
           <iframe width="900" height="506" src={movie.movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Link to="/">Home</Link>
        </div>
    )
}

export default MovieDescription
