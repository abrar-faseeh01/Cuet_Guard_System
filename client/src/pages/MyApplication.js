import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FooterTwo from '../common/footer/FooterTwo';
import MyApplicationComponent from '../components/Application/MyApplicationComponent';

const MyApplication = () => {
  return (
    <div>
        <HeaderOne />
      <Breadcrumb heading="Application" currentPage="Application" />

      <MyApplicationComponent />

      <FooterTwo /> 
    </div>
     )
}

export default MyApplication