import React, { useState } from "react";
import {
  Footer,
  Header,
  Main,
  Navbar,
  Search,
  Modal,
  AddModal,
} from "../../src/components";
import MainContainer from "../../src/components/MainContainer/MainContainer";
import headerStyle from "../../src/components/Header/Header.module.scss";
import Image from "next/image";
import backgroundImg from "../../public/Header.png";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const search = ({ movieList }) => {
  const [modalState, setModalState] = useState(false);
  const state = useSelector((state) => state.onSuccessDelete);

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
      <Main movieList={movieList} dataState={state} />
    </MainContainer>
  );
};

export async function getServerSideProps({ query }) {
  const getParams = () => {
    if (query?.genre) {
      return `?sortBy=vote_average&sortOrder=desc&searchBy=genres&filter=${query.genre}&limit=6`;
    }

    if (query?.sortBy) {
      return `?sortBy=${query.sortBy}&sortOrder=desc&searchBy=title&limit=6`;
    }

    return `?sortBy=vote_average&sortOrder=desc&searchBy=title&limit=6`;
  };

  const params = getParams();

  const res = await fetch(`http://localhost:4000/movies${params}`);
  const movieList = await res.json();

  return {
    props: {
      movieList: movieList.data,
    },
  };
}

export default search;
