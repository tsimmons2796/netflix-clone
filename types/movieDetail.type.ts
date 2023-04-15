type MovieDetailType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | {};
  budget: number;
  genres: GenreType[];
  homepage: string;
  id: number;
};

type GenreType = {
  id: number;
  name: string;
};

type MoviePopularType = {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

type MoviePopularResponseType = {
  page: number;
  results: MoviePopularType[];
  total_results: number;
  total_pages: number;
};
