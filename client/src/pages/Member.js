import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterTwo from "../common/footer/FooterTwo";
import MemberComponent from "../components/member/Members"


const Member = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb heading="Members" currentPage="Members" />
      <MemberComponent />
      <FooterTwo />
    </>
  );
};

export default Member;
