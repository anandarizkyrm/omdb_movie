import React, { Suspense } from 'react';

import Loading from '../components/atoms/Loading';
import Layout from '../components/templates/Layout/Layout';
import { useGetMovies } from '../hooks/useGetMovies';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const MovieList = React.lazy(() => import('../components/organisms/MovieList'));

const Main = () => {
  const { movieList, isLoading, isFetching, setPage, page } = useGetMovies('movie_list');
  const { observer } = useIntersectionObserver(setPage, page);

  return (
    <Layout>
      <div>
        {isLoading && !movieList?.length ? (
          <Loading />
        ) : (
          <Suspense fallback={<></>}>
            <MovieList data={movieList} />
          </Suspense>
        )}
      </div>
      {!isLoading && <div ref={observer} />}
      {isFetching && movieList?.length ? <Loading /> : null}
    </Layout>
  );
};

export default Main;
