import React, { useState } from "react";

import "./Header.scss";

import backgroundImg from "../../assets/Header.png";

import { Navbar, Search, Modal, AddModal } from "../";

const Header = ({ genreList }) => {
  const [modalState, setModalState] = useState(false);
  return (
    <div className="header">
      <Modal modalState={modalState} setModalState={setModalState}>
        <AddModal genreList={genreList} setModalState={setModalState} />
      </Modal>

      <img className="background-image" src={backgroundImg} alt="" />
      <Navbar setModalState={setModalState} />
      <Search />
    </div>
  );
};

export default Header;
