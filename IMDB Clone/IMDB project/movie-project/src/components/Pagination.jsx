import React from "react";

const Pagination = ({ next, prev, page }) => {
  return (
    <>
      <div className=" bg-gray-400/60 flex flex-wrap justify-center">
        <div className="px-5" onClick={prev}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>

        <div className="font-bold-500 text-base ">{page}</div>

        <div className="px-5" onClick={next}>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </>
  );
};

export default Pagination;
