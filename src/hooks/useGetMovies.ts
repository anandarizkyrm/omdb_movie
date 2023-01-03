import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { movieServices } from '../services/index.service';

export const useGetMovies = (key: string): any => {
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState<
    Array<{
      Poster: string;
      Title: string;
      Type: string;
      Year: string;
      imdbID: string;
    }>
  >([]);
  const [search, setSearch] = useState('marvel');

  const { isLoading, isFetching, data } = useQuery([key, page, search], () => {
    return movieServices.getMovies(page, search);
  });

  useEffect(() => {
    if (data) {
      setMovieList([...movieList, ...data]);
    }
  }, [data]);

  return {
    isLoading,
    isFetching,
    movieList,
    page,
    setPage,
    setSearch,
  };
};

export const useGetDetailMovie = (id: string) => {
  return useQuery(['detail_movie', id], () => {
    return movieServices.getDetail(id);
  });
};
