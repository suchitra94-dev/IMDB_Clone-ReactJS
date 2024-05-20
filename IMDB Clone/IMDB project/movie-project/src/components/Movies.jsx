import React, { useState } from "react";
import Moviecard from "./Moviecard";
import { useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({
  handleAddtoWatchList,
  handleRemovefromWatchList,
  watchList,
}) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo == 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=6fdedd62a4aa9c75c7a30d44034b740a&language=en-US&page=${pageNo}`
      )
      .then(function (response) {
        setMovies(response.data.results);
        console.log(response);
      });
  }, [pageNo]);

  return (
    <>
      <div className="mx-4 my-2">
        <div className=" text-center p-2 text-xl font-bold">
          Trending Movies
        </div>

        <div className="flex flex-wrap flex-row justify-around">
          {movies.map((movieObj) => {
            return (
              <Moviecard
                key={movieObj.id}
                poster_path={movieObj.poster_path}
                title={movieObj.title}
                handleAddtoWatchList={handleAddtoWatchList}
                movieObj={movieObj}
                handleRemovefromWatchList={handleRemovefromWatchList}
                watchList={watchList}
              />
            );
          })}
        </div>
      </div>
      <Pagination next={handleNext} prev={handlePrev} page={pageNo} />
    </>
  );
};

export default Movies;

//https://api.themoviedb.org/3/movie/popular?api_key=6fdedd62a4aa9c75c7a30d44034b740a&language=en-US&page=2
