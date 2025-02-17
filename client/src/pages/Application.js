

import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import FooterTwo from "../common/footer/FooterTwo";

import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import AllRequestPost from "../components/Application/AllRequestPost";


const Application = () => {
  return (
    <>

      <HeaderOne />
      <Breadcrumb heading="Application" currentPage="Application" />

      <AllRequestPost />

      <FooterTwo />
    </>
  );
}

export default Application;