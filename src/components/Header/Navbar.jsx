import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoPng from "../../../public/logo.png";
import { Button } from "..";
import searchBtn from "../../../public/search-btn.svg";
import styles from "./Navbar.module.scss";
import { formSearchUrl } from "../../helpers";

const Navbar = ({ setModalState, button, searchIcon }) => {
  const toSearchUrl = formSearchUrl();

  return (
    <div className={styles.navbar}>
      <Image
        className={styles.navbar__logo}
        src={logoPng}
        alt="logo"
        data-testid="logo"
      />

      {button && (
        <Button
          text="+ ADD"
          bgcolor="rgba(96, 96, 96, 0.6)"
          onModal={setModalState}
          data-testid="addBtn"
        />
      )}
      {searchIcon && (
        <Link href={toSearchUrl}>
          <Image
            className={styles.search__icon}
            src={searchBtn}
            alt="search icon"
            data-testid="search-icon"
          />
        </Link>
      )}
    </div>
  );
};

export default Navbar;
