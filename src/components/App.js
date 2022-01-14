import React, { useState, useEffect, useCallback } from "react";
import { Header, Main, Footer } from ".";
import "../style/main.scss";

import MovieDataContext from "../context/movieData";

const genreList = [
  { id: 1, title: "All", checked: false },
  { id: 2, title: "Documentary", checked: false },
  { id: 3, title: "Comedy", checked: false },
  { id: 4, title: "Horror", checked: false },
  { id: 5, title: "Crime", checked: false },
];

const data = [
  {
    id: 337167,
    title: "Fifty Shades Freed",
    tagline: "Don't miss the climax",
    vote_average: 6.1,
    vote_count: 1195,
    release_date: "2018-02-07",
    poster_path:
      "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
    overview:
      "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
    budget: 55000000,
    revenue: 136906000,
    genres: ["Drama", "Romance"],
    runtime: 106,
  },
  {
    id: 338970,
    title: "Tomb Raider",
    tagline: "Her legend begins",
    vote_average: 6.2,
    vote_count: 817,
    release_date: "2018-03-08",
    poster_path:
      "https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
    overview:
      "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
    budget: 94000000,
    revenue: 126025000,
    genres: ["Action", "Adventure"],
    runtime: 118,
  },
  {
    id: 181808,
    title: "Star Wars: The Last Jedi",
    tagline: "The Saga Continues",
    vote_average: 7.1,
    vote_count: 4732,
    release_date: "2017-12-13",
    poster_path:
      "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
    overview:
      "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
    budget: 200000000,
    revenue: 1325937250,
    genres: ["Fantasy", "Adventure", "Science Fiction"],
    runtime: 152,
  },
  {
    id: 284054,
    title: "Black Panther",
    tagline: "Long live the king",
    vote_average: 7.3,
    vote_count: 3788,
    release_date: "2018-02-13",
    poster_path:
      "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    overview:
      "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
    budget: 200000000,
    revenue: 1245257672,
    genres: ["Action", "Adventure", "Fantasy", "Science Fiction"],
    runtime: 134,
  },
  {
    id: 354912,
    title: "Coco",
    tagline: "The celebration of a lifetime",
    vote_average: 7.8,
    vote_count: 3619,
    release_date: "2017-10-27",
    poster_path:
      "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
    overview:
      "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
    budget: 175000000,
    revenue: 700920729,
    genres: ["Adventure", "Comedy", "Family", "Animation"],
    runtime: 105,
  },
  {
    id: 333339,
    title: "Ready Player One",
    tagline: "A better reality awaits.",
    vote_average: 8.1,
    vote_count: 617,
    release_date: "2018-03-28",
    poster_path:
      "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
    overview:
      "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
    budget: 175000000,
    revenue: 0,
    genres: ["Adventure", "Science Fiction", "Action"],
    runtime: 140,
  },
];

// function useToggle() {
//   const [clickedMovieId, setClickedMovieId] = React.useState(null);
//   const [headerPoster, setHeaderPoster] = useState(false);

//   useEffect()
// }

export function useSort() {
  const [toggle, setToggle] = useState(true);
  // const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    if (toggle) {
      data.sort(
        (a, b) =>
          Number(b.release_date.split("-")[0]) -
          Number(a.release_date.split("-")[0])
      );
    } else {
      data.sort(
        (a, b) =>
          Number(a.release_date.split("-")[0]) -
          Number(b.release_date.split("-")[0])
      );
    }
  }, [toggle]);

  return setToggle;
}

const App = () => {
  const [clickedMovieId, setClickedMovieId] = React.useState(null);
  const [headerPoster, setHeaderPoster] = useState(false);
  const findMovie = data.find((item) => item.id === clickedMovieId);

  const setToggle = useSort(data);
  // Custom hook

  return (
    <div className="container">
      <MovieDataContext.Provider
        value={{
          data,
          setToggle,
          clickedMovieId,
          setClickedMovieId,
          headerPoster,
          setHeaderPoster,
          findMovie,
        }}
      >
        <Header genreList={genreList} />
        <Main genreList={genreList} />
        <Footer />
      </MovieDataContext.Provider>
    </div>
  );
};

export default App;
