import React from 'react';
const AutoCompleteSearch = React.lazy(() => import('../molecules/AutoCompleteSearch'));

const Navbar = () => {
  return (
    <div className="px-32 py-8 shadow-lg flex justify-between">
      <h1 className="font-bold text-3xl text-gray-400">Omdb Movie</h1>
      <AutoCompleteSearch />
    </div>
  );
};

export default Navbar;
