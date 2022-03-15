// import React from "react";
// import "@testing-library/jest-dom";
// import { render } from "@testing-library/react";
// import { ClickedPoster } from "../components";
// import store from "../redux/store";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";

// describe("Clicked poster component", () => {
//   test("dummy text", () => {
//     const { getByText } = render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <ClickedPoster />
//         </BrowserRouter>
//       </Provider>
//     );

//     expect(getByText("min")).toBeInTheDocument();
//   });
//   window.fetch = jest.fn();
//   test("clicked poster", () => {
//     const movie = {
//       id: 337167,
//       title: "Fifty Shades Freed",
//       tagline: "Don't miss the climax",
//       vote_average: 6.1,
//       vote_count: 1195,
//       release_date: "2018-02-07",
//       poster_path:
//         "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
//       overview:
//         "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
//       budget: 55000000,
//       revenue: 136906000,
//       genres: ["Drama", "Romance"],
//       runtime: 106,
//     };

//     const { getByText } = render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <ClickedPoster testMovie={movie} />
//         </BrowserRouter>
//       </Provider>
//     );

//     expect(getByText(/Fifty Shades Freed/i)).toBeInTheDocument();
//     expect(getByText(6.1)).toBeInTheDocument();
//     expect(getByText("2018")).toBeInTheDocument();
//     expect(getByText(/`${testMovie.runtime % 60}min`/i)).toBeInTheDocument();
//   });
// });
