import * as React from "react";
import { Link } from "react-router-dom";

export default function Header({ onDataChanged }) {
  const handleClick = (cond) => {
    onDataChanged(cond);
  };

  return (
    <div className="header_cont row">
      <div className="filter_header col-md-3">
        {/* <h3>
          RIDHA<span> STORE</span>
        </h3> */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search By Title"
            aria-label="Search By Title"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-primary button" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="filter_sort col-md-3">
        Sort By Price :{" "}
        <button
          className="btn btn-primary button"
          type="button"
          onClick={() => handleClick("low_to_high")}
        >
          Low To High
        </button>
        <button
          className="btn btn-primary button"
          type="button"
          onClick={() => handleClick("high_to_low")}
        >
          High To Low
        </button>
        <button
          className="btn btn-primary button"
          type="button"
          onClick={() => handleClick("reset")}
        >
          Reset
        </button>
      </div>
      <div className="col-md-3">
        <button className="btn button " >
          <Link to="/cart">MY CART</Link>
        </button>
      </div>
    </div>
  );
}
