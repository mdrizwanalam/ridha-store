import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Header({onDataChanged}) {

  const handleClick = () => {
    const cond = 'low_to_high';
    onDataChanged(cond);
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
     
      <Stack spacing={2} direction="row"> Price:
        <Button variant="contained" onClick={handleClick}>Low To High</Button>
        <Button variant="contained">High To Low</Button>
        <Button variant="contained">reset</Button>

      </Stack>
    </>
  );
}
