import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { movieServices } from '../services/index.service';

export const useSearchMovie = (): {
  isLoading: boolean;
  isFetching: boolean;
  data: any;
  search: string;
  setSearch: any;
} => {
  const [search, setSearch] = useState('');
  const [fetchData, setFetchData] = useState(false);

  const { isLoading, isFetching, data } = useQuery(
    ['search', 1, search],
    () => {
      return movieServices.getMovies(1, search);
    },
    {
      enabled: fetchData,
    },
  );
  useEffect(() => {
    if (search.length >= 3) {
      return setFetchData(true);
    }
    return setFetchData(false);
  }, [search]);

  return {
    isLoading,
    isFetching,
    data,
    search,
    setSearch,
  };
};
