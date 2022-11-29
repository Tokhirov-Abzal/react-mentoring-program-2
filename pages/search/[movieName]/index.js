import React, { useState } from "react";
import {
  Footer,
  Header,
  Main,
  Navbar,
  Search,
  Modal,
  AddModal,
} from "../../../src/components";
import App from "../../../src/components/App";
import MainContainer from "../../../src/components/MainContainer/MainContainer";
import headerStyle from "../../../src/components/Header/Header.module.scss";
import Image from "next/image";
import backgroundImg from "../../../public/Header.png";
import { useRouter } from "next/router";

const movieName = ({ movieList }) => {
  const [modalState, setModalState] = useState(false);

  return (
    <MainContainer>
      <Modal modalState={modalState} setModalState={setModalState}>
        <AddModal setModalState={setModalState} modalTitle="Add movie" />
      </Modal>
      <Header nameClass={headerStyle.header}>
        <Image
          className={headerStyle.backgroundImage}
          src={backgroundImg}
          alt="bgImage"
          data-testid="bgImage"
          priority={true}
        />
        <Navbar setModalState={setModalState} button={true} />
        <Search />
      </Header>
      <Main movieList={movieList} />
    </MainContainer>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `http://localhost:4000/movies?search=${params.movieName}&searchBy=title&limit=6`
  );
  const searchedMovie = await res.json();

  return {
    props: {
      movieList: searchedMovie.data,
    },
  };
}

export default movieName;
