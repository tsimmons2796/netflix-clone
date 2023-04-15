import Image from "next/image";
import Link from "next/link";
interface MovieProps {
  movieDetails: MovieDetailType;
}
export default function MoviePreview({ movieDetails }: MovieProps) {
  const imagePath = `https://image.tmdb.org/t/p/original/`;
  return (
    <div>
      <h1>{movieDetails.original_title}</h1>
      <div>{movieDetails.release_date}</div>
      <Link href={"google.com"}>
        <Image
          src={imagePath + movieDetails.poster_path}
          width={800}
          height={600}
          alt={""}
        ></Image>
      </Link>
    </div>
  );
}
