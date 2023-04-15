import { GetServerSideProps } from "next";
import MoviePreview from "./MoviePreview";
interface Props {
  movieDataPopular: MoviePopularType[];
  movieDetailsList: MovieDetailType[];
}
export default async function Home() {
  // const popularMovieRequest = await fetch(
  //   `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  // );

  // const movieDataPopular = await popularMovieRequest
  //   .json()
  //   .then((data: MoviePopularResponseType) => {
  //     return data.results;
  //   });
  // console.log(movieDataPopular, "popular Movie");
  // const movieDetailsList: MovieTypeInterface[] = [];
  // const movieDetailsList: any[] = [];
  // const idList: number[] = [];
  // const promises: Promise<any>[] = [];
  // const movieIds = movieDataPopular.map(async (movie: MoviePopularType) => {
  //   idList.push(movie.id);
  //   // console.log(idList);
  // });
  // const detailList = idList.map(async (movieId: number) => {
  //   const movieDetailRequest = await fetch(
  //     `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  //   );
  //   if (movieDetailRequest.ok) {
  //     movieDetailsList.push(
  //       await movieDetailRequest.json().then((movie: MovieDetailType) => {
  //         movieDetailsList.push(movie);
  //         return movie;
  //       })
  //     );
  //     // movieDetailsList.push(movieDetail);
  //   }
  // });
  // console.log(movieDetailsList);

  async function getMovieById(id: number): Promise<MovieDetailType> {
    const movieDetailRequest = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
    );
    const movieDetail = await movieDetailRequest.json();
    return movieDetail;
  }

  const getServerSideProps: GetServerSideProps = async () => {
    const popularMovieRequest = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    );

    const movieDataPopular = await popularMovieRequest
      .json()
      .then((data: MoviePopularResponseType) => {
        return data.results;
      });

    const promises = movieDataPopular.map(async (movie: MoviePopularType) => {
      const movieDetail = await getMovieById(movie.id);
      return movieDetail;
    });

    const movieDetailsList = await Promise.all(promises);

    return {
      props: {
        movieDataPopular,
        movieDetailsList,
      },
    };
  };

  const movieDetailsList = await getServerSideProps().then((data) => {
    return data.props.movieDetailsList;
  });
  console.log(movieDetailsList);

  return (
    <div>
      Hello Testing
      <div>
        {/* {movieDataPopular.map((movie: MoviePopularType, index: number) => (
          <div key={index}>
            <h1>{movie.original_title}</h1>
            <Movie title={movie.original_title} key={index} />
          </div>
        ))} */}
      </div>
      {movieDetailsList.map((movieDetails: MovieDetailType, index: number) => {
        return <MoviePreview movieDetails={movieDetails} key={index} />;
      })}
      {/* <div>{<Movie title={"something"} />}</div> */}
    </div>
  );
}
