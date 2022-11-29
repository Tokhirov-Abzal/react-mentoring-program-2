import React from "react";
import Head from "next/head";
import Footer from "../Footer/Footer";
import App from "../App";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={keywords}></meta>
        <title>React mentoring programm</title>
      </Head>
      <App>
        {children}
        <Footer />
      </App>
    </>
  );
};

export default MainContainer;
