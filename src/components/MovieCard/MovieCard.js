export default function MovieCard({
  movie,
  selectedMovies,
  setSelectedMovies,
}) {
  function handleRecommend(event) {
    console.log(movie.imdbid)
    const recomMovie = movie
    setSelectedMovies(...selectedMovies, recomMovie)
    console.log(selectedMovies)
  }

  return (
    <li
      onClick={handleRecommend}
      style={{
        listStyleType: 'none',
        backgroundImage: `url(${movie.thumbnail})`,
      }}
    >
      <div className="MovieCard">
        <div className="movieInfo">{movie.title}</div>
      </div>
    </li>
  )
}
