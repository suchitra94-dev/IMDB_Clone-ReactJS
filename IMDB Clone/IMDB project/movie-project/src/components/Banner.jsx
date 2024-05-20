import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[20vh] md:h-[60vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://rukminim2.flixcart.com/image/850/1000/juk4gi80/poster/5/h/g/large-newposter8508-movie-man-of-steel-superman-hd-wallpaper-original-imaf5tgqznjffnbj.jpeg?q=20&crop=false)`,
      }}
    >
      <div className="w-full text-center text-white text-base bg-gray-800/60 p-2">
        Man of Steel
      </div>
    </div>
  );
};

export default Banner;
