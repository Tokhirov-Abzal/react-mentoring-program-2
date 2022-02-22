import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./Header.scss";

import backgroundImg from "../../assets/Header.png";

import { Navbar, Search, Modal, AddModal, ClickedPoster } from "../";
import { Routes, useParams, Route, useLocation } from "react-router-dom";

const Header = ({ src, setSrc }) => {
  const [modalState, setModalState] = useState(false);
  const clickedMovie = useSelector((state) => state.clickedMovie);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {}, [id]);
  const location = useLocation();
  const [movieId, setMovieId] = useState(null);

  useEffect(() => {
    setMovieId(
      parseInt(
        location.pathname.split("/")[location.pathname.split("/").length - 1]
      )
    );
  }, [location.pathname]);
  return (
    <div className={!isNaN(movieId) ? "header withPoster" : "header"}>
      <Modal modalState={modalState} setModalState={setModalState}>
        <AddModal setModalState={setModalState} modalTitle="Add movie" />
      </Modal>

      {/* {!id ? (
        <React.Fragment>
          <img className="background-image" src={backgroundImg} alt="" />
          <Navbar setModalState={setModalState} button={true} />
          <Search />
        </React.Fragment>
      ) : (
        <ClickedPoster {...movie} />
      )} */}
      <Routes>
        <Route
          path="/search"
          element={
            <React.Fragment>
              <img className="background-image" src={backgroundImg} alt="" />
              <Navbar setModalState={setModalState} button={true} />
              <Search />
            </React.Fragment>
          }
        />

        <Route
          path="/search/:movieName"
          element={
            <React.Fragment>
              <img className="background-image" src={backgroundImg} alt="" />
              <Navbar setModalState={setModalState} button={true} />
              <Search />
            </React.Fragment>
          }
        />

        <Route
          path="/search/:movieName/:id"
          element={<ClickedPoster {...movie} />}
        />
        <Route
          path="/*"
          element={
            <React.Fragment>
              <img className="background-image" src={backgroundImg} alt="" />
              <Navbar setModalState={setModalState} button={true} />
              <Search />
            </React.Fragment>
          }
        />
      </Routes>
    </div>
  );
};

export default Header;
