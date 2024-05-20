import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  const [watchList, setWatchList] = useState([]);

  const handleAddtoWatchList = (movieObj) => {
    const newWatchList = [...watchList, movieObj];
    localStorage.setItem("movieapp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

  const handleRemovefromWatchList = (movieObj) => {
    let filteredWatchList = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });
    localStorage.setItem("movieapp", JSON.stringify(filteredWatchList));
    setWatchList(filteredWatchList);
    console.log(filteredWatchList);
  };
  useEffect(() => {
    let moviesfromlocalstorage = localStorage.getItem("movieapp");
    if (!moviesfromlocalstorage) {
      return;
    }
    setWatchList(JSON.parse(moviesfromlocalstorage));
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleAddtoWatchList={handleAddtoWatchList}
                  handleRemovefromWatchList={handleRemovefromWatchList}
                  watchList={watchList}
                />
              </>
            }
          />

          <Route
            path="/watchlist"
            element={
              <Watchlist
                key="watchlist.id"
                watchList={watchList}
                setWatchList={setWatchList}
                handleRemovefromWatchList={handleRemovefromWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
