

import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FooterTwo from '../common/footer/FooterTwo';
import GatePassDetailsComponent from '../components/gatePass/GatePassPostDetailsComponent';

const GatePassPostDetails = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb
        heading="Post Details"
        currentPage="Post Details"
      />
      <GatePassDetailsComponent />
      <FooterTwo />
    </>
  )
}

export default GatePassPostDetails;