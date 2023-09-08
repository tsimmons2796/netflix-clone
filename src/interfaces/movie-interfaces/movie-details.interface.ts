import { PopularMovieInterface } from "./popular-movie.interface";

export interface MovieDetailInterface {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | BelongsToCollectionInterface;
  budget: number;
  genres: GenreInterface[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompanyInterface[];
  production_countries: ProductionCountryInterface[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguageInterface[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MoviePopularResponseInterface {
  page: number;
  results: PopularMovieInterface[];
  total_results: number;
  total_pages: number;
}

interface ProductionCompanyInterface {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}
interface ProductionCountryInterface {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguageInterface {
  iso_639_1: string;
  name: string;
}

interface BelongsToCollectionInterface {}

interface GenreInterface {
  id: number;
  name: string;
}
