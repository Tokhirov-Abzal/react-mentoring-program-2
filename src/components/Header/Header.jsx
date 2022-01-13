import React, { useState, useContext } from "react";

import "./Header.scss";

import backgroundImg from "../../assets/Header.png";

import { Navbar, Search, Modal, AddModal, ClickedPoster } from "../";
import movieDataContext from "../../context/movieData";

const Header = ({ genreList }) => {
  const [modalState, setModalState] = useState(false);

  const { headerPoster, findMovie } = useContext(movieDataContext);

  return (
    <div className={headerPoster ? "header withPoster" : "header"}>
      <Modal modalState={modalState} setModalState={setModalState}>
        <AddModal
          genreList={genreList}
          setModalState={setModalState}
          modalTitle="Add movie"
        />
      </Modal>

      {!findMovie ? (
        <React.Fragment>
          <img className="background-image" src={backgroundImg} alt="" />
          <Navbar setModalState={setModalState} button={true} />
          <Search />
        </React.Fragment>
      ) : (
        <ClickedPoster {...findMovie} />
      )}
    </div>
  );
};

export default Header;
