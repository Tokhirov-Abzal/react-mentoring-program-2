import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./Header.scss";

import backgroundImg from "../../assets/Header.png";

import { Navbar, Search, Modal, AddModal, ClickedPoster } from "../";

const Header = () => {
  const [modalState, setModalState] = useState(false);
  const clickedMovie = useSelector((state) => state.clickedMovie);
  return (
    <div className={clickedMovie ? "header withPoster" : "header"}>
      <Modal modalState={modalState} setModalState={setModalState}>
        <AddModal setModalState={setModalState} modalTitle="Add movie" />
      </Modal>

      {!clickedMovie ? (
        <React.Fragment>
          <img className="background-image" src={backgroundImg} alt="" />
          <Navbar setModalState={setModalState} button={true} />
          <Search />
        </React.Fragment>
      ) : (
        <ClickedPoster {...clickedMovie} />
      )}
    </div>
  );
};

export default Header;
