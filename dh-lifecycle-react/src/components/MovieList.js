
function MoviesList({ movies }) {
  return(
    <tbody>
      {movies.map(movie => (
        <tr key={movie.id}>
        <td>{movie.id}</td>
        <td>{movie.title}</td>
        <td>{movie.rating}</td>
        <td>{movie.awards}</td>
        <td>{movie.length}</td>
      </tr>
      ))}
		</tbody>
  )
}

export default MoviesList