import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../../redux/actions";

export default function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (search.trim().length) {
      dispatch(getMovies(search.trim(), 1));
      setSearch("");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        placeholder="What are you looking for?"
        onChange={handleChange}
      />
      <input type="submit" value="Search Movies" />
    </form>
  );
}
