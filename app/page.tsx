import Movie from "./Movie";

export default async function Home() {
  const movieDataRequest = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const movieData = await movieDataRequest.json().then((data) => {
    return data.results;
  });
  const movieIds = movieData.map((movie: MovieDetailType) => movie.id);

  console.log(movieIds);

  const movieDataDetailsRequest = movieIds.map((movieId: number) => {});
  // await fetch(
  //   `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  // );
  return (
    <div>
      Hello Testing
      <div>{<Movie title={"something"} />}</div>
    </div>
  );
}
