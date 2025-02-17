import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FooterTwo from '../common/footer/FooterTwo';
import CreateGatePassPost from '../components/gatePass/CreateGatePassPost';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const GatePassPostCreate = () => {

  const { user, loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  setTimeout(() => {
    if (!user) {
        navigate('/login');
    }
  }, 1500);

  return (
    (user) ?
    <>
      <HeaderOne />
      <Breadcrumb
        heading="Gate pass Post Create "
        currentPage="Gate Pass Post Create"
      />
      <CreateGatePassPost />
      <FooterTwo /> 
    </>: <>
      <div className=' text-5xl font-bold'>Please Login First!!!</div>
    </>
  )
}

export default GatePassPostCreate;