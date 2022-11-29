import React from "react";
import { Header, Main, ClickedPoster } from "../../../src/components";

import MainContainer from "../../../src/components/MainContainer/MainContainer";
import headerStyle from "../../../src/components/Header/Header.module.scss";

const id = ({ movie, movieList }) => {
  return (
    <MainContainer>
      <Header nameClass={`${headerStyle.header} ${headerStyle.withPoster}`}>
        <ClickedPoster {...movie} />
      </Header>
      <Main movieList={movieList} />
    </MainContainer>
  );
};

export async function getServerSideProps({ params }) {
  const movieRes = await fetch(`http://localhost:4000/movies/${params.id}`);
  const movieListRes = await fetch(
    `http://localhost:4000/movies?search=${params.movieName}&searchBy=title&limit=6`
  );
  const movie = await movieRes.json();
  const movieList = await movieListRes.json();

  return {
    props: {
      movie,
      movieList: movieList.data,
    },
  };
}

export default id;
