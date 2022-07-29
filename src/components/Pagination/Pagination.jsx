import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/actions";
import "./Pagination.css";

export default function Pagination({ max }) {
  let search = useSelector((state) => state.search);
  let page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  async function previous() {
    if (page - 1 >= 1) {
      await dispatch(getMovies(search, page - 1));
    }
  }

  async function next() {
    if (page + 1 <= max) {
      await dispatch(getMovies(search, page + 1));
    }
  }

  return (
    <div className="container-pagination">
      <button className="container-pagination-button" onClick={previous}>
        Prev
      </button>
      <p>
        {page} of {max}
      </p>
      <button className="container-pagination-button" onClick={next}>
        Next
      </button>
    </div>
  );
}
