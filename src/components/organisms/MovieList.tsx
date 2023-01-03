import { useState } from 'react';

import CardContent from '../molecules/CardContent';
import ModalPoster from '../molecules/Modal';

type Props = {
  data: Array<{
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
  }>;
};

const MovieList = (props: Props) => {
  const { data } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popupMovie, setPopupMovie] = useState<{ title: string; imageURl: string }>();

  const handleMovieImageOnClick = (movie: { title: string; imageURl: string }) => {
    setPopupMovie({
      title: movie.title,
      imageURl: movie.imageURl,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="grid grid-cols-3">
      {data?.map((movie) => (
        <div key={movie?.imdbID}>
          <CardContent
            id={movie?.imdbID}
            imageURl={movie?.Poster}
            title={movie?.Title}
            type={movie?.Type}
            year={movie?.Year}
            handleMovieImageOnClick={handleMovieImageOnClick}
          />
        </div>
      ))}
      {popupMovie ? (
        <ModalPoster
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          title={popupMovie?.title}
          img={popupMovie?.imageURl}
        />
      ) : null}
    </div>
  );
};

export default MovieList;
