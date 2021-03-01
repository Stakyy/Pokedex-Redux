import React from 'react';

const Search: React.FC = () => {
  return (
    <div className="search">
      <form action="get">
        <input id="search" placeholder="Введите имя или номер" type="text" />
        <button type="submit">
          <i className="button-img"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
