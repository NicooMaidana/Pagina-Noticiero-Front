import React from 'react';
import './Search.css';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <div className="flex justify-end w-full form-container ">
      <form className="example" action="/action_page.php">
        <input type="text" placeholder="Buscar..." name="search2" />
        <button type="submit"><FaSearch /></button>
      </form>
    </div>
  );
}

export default Search;
