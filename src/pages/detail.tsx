import { LeftOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';

import bg from '../assets/bg.jpg';
import Button from '../components/atoms/Button';
import Loading from '../components/atoms/Loading';
import Rating from '../components/atoms/Rating';
import { useGetDetailMovie } from '../hooks/useGetMovies';

const DetailPage = () => {
  const { id } = useParams();

  if (!id) return null;
  const { data: detail, isLoading } = useGetDetailMovie(id);

  return (
    <section className="px-32 md:pb-32">
      <div className="absolute h-2/6 md:h-4/6 w-full top-0 right-0">
        <div className="relative w-full h-full">
          <img
            alt="example"
            style={{ border: 0, outline: 0 }}
            className="w-full h-full"
            src={bg}
          />
          <div className="section-backdrop"></div>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex mt-64 md:mt-[30rem]">
            <div className="relative  w-28 h-36 md:w-80 md:min-w-[300px] md:h-96 md:relative">
              <img alt="example" width={200} src={detail?.Poster} />
            </div>
            <div className="ml-4 ">
              <h1 className="font-bold text-sm md:text-3xl ">{detail?.Title}</h1>
              <p className="md:text-lg md:font-base text-sm mt-4">
                Release Date : {detail?.Year}
              </p>
              <p className="md:text-lg md:font-base text-sm">Actors : {detail?.Actors}</p>
              <div className="flex gap-2 items-center">
                <Rating rate={parseInt(detail?.imdbRating)} />{' '}
                <p className="p-0 mt-2">({detail?.imdbVotes} )</p>
              </div>
              <p className="mt-2 text-justify md:block hidden text-sm  md:text-xl">
                {detail?.Plot}
              </p>
            </div>
          </div>

          <p className="mt-2 text-justify md:hidden">{detail?.overview}</p>
          <Link to="/">
            <div className="my-6 float-left cursor-pointer">
              <Button name="Back" icon={<LeftOutlined />} />
            </div>
          </Link>
        </>
      )}
    </section>
  );
};

export default DetailPage;
