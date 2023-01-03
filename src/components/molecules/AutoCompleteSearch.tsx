import { Link } from 'react-router-dom';

import { useSearchMovie } from '../../hooks/useSearchMovie';
import { sliceStr } from '../../utils';
import InputSearch from '../atoms/InputSearch';
import Loading from '../atoms/Loading';

const AutoCompleteSearch = () => {
  const { data, isLoading, setSearch, search } = useSearchMovie();

  return (
    <div>
      <div className="">
        <InputSearch handleChange={(e) => setSearch(e.target.value)} />
        {search?.length >= 3 ? (
          <div className="bg-gray-100 border border-gray-300 min-w-[18rem] mt-2 rounded-md p-2 absolute z-10">
            {isLoading && search?.length >= 3 ? (
              <Loading />
            ) : !data ? (
              <h1 className="text-sm text-center">Data Not Found</h1>
            ) : (
              data?.map(
                (item: {
                  Poster: string;
                  Title: string;
                  Type: string;
                  Year: string;
                  imdbID: string;
                }) => (
                  <Link key={item?.imdbID} to={`detail/${item?.imdbID}`}>
                    <p className="text-gray-400 text-sm py-1 hover:text-blue-500">
                      {' '}
                      {sliceStr(item.Title, 37)}
                    </p>
                  </Link>
                ),
              )
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AutoCompleteSearch;
