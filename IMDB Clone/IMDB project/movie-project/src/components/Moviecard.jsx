import React from "react";

const Moviecard = ({
  poster_path,
  title,
  handleAddtoWatchList,
  handleRemovefromWatchList,
  movieObj,
  watchList,
}) => {
  const doesContain = (movieObj) => {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  };

  return (
    <div
      className="flex flex-col m-2 h-[40vh] w-[150px] bg-cover bg-center rounded-xl  hover:scale-110 duration-300 hover:cursor-pointer justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemovefromWatchList(movieObj)}
          className="mr-3 mt-3 flex justify-center h-8 w-8 items-center rounded-lg bg-black"
        >
          &#10006;
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchList(movieObj)}
          className="mr-3 mt-3 flex justify-center h-8 w-8 items-center rounded-lg bg-black"
        >
          &#128525;
        </div>
      )}

      <div className="text-center w-full rounded-b-xl text-white text-sm bg-gray-800/60 p-2 font-bold">
        {title}
      </div>
    </div>
  );
};

export default Moviecard;
