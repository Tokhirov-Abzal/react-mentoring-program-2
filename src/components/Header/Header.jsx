import React, { useEffect, useState } from "react";

import "./Header.scss";

import backgroundImg from "../../assets/Header.png";

import { Navbar, Search, Modal, AddModal, ClickedPoster } from "../";
import { Routes, Route, useLocation } from "react-router-dom";
import { useMemo } from "react";
import { DICTIONARY } from "../../dictionary";

const Header = () => {
  const [modalState, setModalState] = useState(false);
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const [movieId, setMovieId] = useState(null);
  const pathName = useMemo(() => location.pathname, [location]);

  useEffect(() => {
    setMovieId(parseInt(pathName.split("/").pop()));
  }, [pathName]);

  return (
    <div className={!isNaN(movieId) ? "header withPoster" : "header"}>
      <Modal modalState={modalState} setModalState={setModalState}>
        <AddModal setModalState={setModalState} modalTitle="Add movie" />
      </Modal>
      <Routes>
        <Route
          path={DICTIONARY.search.baseSearchUrl}
          element={
            <React.Fragment>
              <img
                className="background-image"
                src={backgroundImg}
                alt="bgImage"
                data-testid="bgImage"
              />
              <Navbar setModalState={setModalState} button={true} />
              <Search />
            </React.Fragment>
          }
        />

        <Route
          path={`${DICTIONARY.search.baseSearchUrl}/:movieName`}
          element={
            <React.Fragment>
              <img
                className="background-image"
                src={backgroundImg}
                alt="background-image"
              />
              <Navbar setModalState={setModalState} button={true} />
              <Search />
            </React.Fragment>
          }
        />

        <Route
          path={`${DICTIONARY.search.baseSearchUrl}/:movieName/:id`}
          element={<ClickedPoster {...movie} />}
        />
        <Route
          path="/*"
          element={
            <React.Fragment>
              <img
                className="background-image"
                src={backgroundImg}
                alt="background-image"
              />
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
