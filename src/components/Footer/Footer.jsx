import React from "react";
import Image from "next/image";
import logoPng from "../../../public/logo.png";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Image src={logoPng} alt="footer" />
    </div>
  );
};

export default Footer;
