import React, { useEffect, useState } from "react";
import genreid from "../utility/genre";

const Watchlist = ({ watchList, setWatchList, handleRemovefromWatchList }) => {
  const [search, setSearch] = useState([]);
  const [genre, setGenre] = useState(["All Genre"]);
  const [currentGenre, setCurrentGenre] = useState("All Genre");

  let handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  let sortIncreasing = () => {
    let sortedInc = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedInc]);
  };

  let sortDecreasing = () => {
    let sortedDec = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDec]);
  };
  let sortPopularityInc = () => {
    let sortPopInc = watchList.sort((movieA, movieB) => {
      return movieA.popularity - movieB.popularity;
    });
    setWatchList([...sortPopInc]);
  };

  let sortPopularityDec = () => {
    let sortPopDec = watchList.sort((movieA, movieB) => {
      return movieB.popularity - movieA.popularity;
    });
    setWatchList([...sortPopDec]);
  };

  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreid[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenre(["All Genre", ...temp]);
  }, [watchList]);

  return (
    <>
      <div className="flex justify-center flex-wrap my-6">
        {genre.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currentGenre == genre
                  ? "flex justify-center items-center h-[2rem] w-[7rem] bg-blue-400/60 text-white font-bold rounded-xl mx-4 my-2"
                  : "flex justify-center items-center h-[2rem] w-[7rem] bg-gray-400/60 text-white font-bold rounded-xl mx-4 my-2"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-6">
        <input
          onChange={handleSearch}
          value={search}
          className="h-[2rem] w-[14rem] bg-gray-200/60 border-2 px-2"
          type="text"
          placeholder="Search for movies"
        ></input>
      </div>

      <div className="rounded-lg overflow-hidden border border-gray-400/40 m-5">
        <table className="w-full text-gray-500 text-center text-sm">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div onClick={sortIncreasing}>
                  <i className="fa-solid fa-arrow-up px-2"></i>
                </div>
                <div>Rating</div>
                <div onClick={sortDecreasing}>
                  <i className="fa-solid fa-arrow-down px-2"></i>
                </div>
              </th>
              <th>
                <i
                  onClick={sortPopularityInc}
                  className="fa-solid fa-arrow-up px-2"
                ></i>
                Popularity
                <i
                  onClick={sortPopularityDec}
                  className="fa-solid fa-arrow-down px-2"
                ></i>
              </th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList
              .filter((movieObj) => {
                if (currentGenre == "All Genre") {
                  return true;
                } else {
                  return genreid[movieObj.genre_ids[0]] == currentGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toString().toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id} className="border-b-2">
                    <td className="flex items-center p-4">
                      <img
                        className="h-[5rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td> {movieObj.popularity}</td>
                    <td>{genreid[movieObj.genre_ids[0]]}</td>
                    <td>
                      <button
                        onClick={() => {
                          handleRemovefromWatchList(movieObj);
                        }}
                        className="border-2 px-2 text-red-500 rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
