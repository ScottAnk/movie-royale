export default function RecommendedMovie({ movie }) {
  return (
    <div className="MovieCard">
      <div className="MovieInfo">
        <h4>
          <i>'{movie.title}'</i>
        </h4>
      </div>
      <li
        className="MoviePoster"
        style={{
          backgroundImage: `url(${movie.image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          height: '100%',
          width: '100%',
          minHeight: '300px',
          minWidth: '200px',
          maxHeight: '300px',
          maxWidth: 'auto',
        }}
      ></li>
    </div>
  )
}
