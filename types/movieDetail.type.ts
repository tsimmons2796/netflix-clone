type MovieDetailType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | BelongsToCollectionType;
  budget: number;
  genres: GenreType[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompanyType[];
  production_countries: ProductionCountryType[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguageType[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
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

type ProductionCompanyType = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};
type ProductionCountryType = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguageType = {
  iso_639_1: string;
  name: string;
};

type BelongsToCollectionType = {};

interface MovieTypeInterface {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: any;
  budget: number;
  genres: GenreType[];
  homepage: string;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompanyType[];
  production_countries: ProductionCountryType[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguageType[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
