import axios from 'axios';

const baseURL = `${import.meta.env.VITE_BASE_URL}/?apikey=${
  import.meta.env.VITE_API_KEY
}`;

const getMovies = async (page: number, search?: string) => {
  try {
    const listMovie = await axios.get(`${baseURL}&s=${search}&page=${page}`);

    return listMovie.data?.Search;
  } catch (err) {
    return err;
  }
};

const getDetail = async (id: string) => {
  const listTodo = await axios.get(`${baseURL}&i=${id}`);

  return listTodo.data;
};

export const movieServices = {
  getMovies,
  getDetail,
};
