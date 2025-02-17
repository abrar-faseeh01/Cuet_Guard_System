import React, { useState } from "react";
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FooterTwo from "../common/footer/FooterTwo";
import HeaderOne from "../common/header/HeaderOne";
import AllApprovePost from "../components/gatePass/AllPost";

const HomeDefault = () => {
  const [showApprovedPosts, setShowApprovedPosts] = useState(false);


  return (
    <>
      <HeaderOne /> 
      <Breadcrumb heading="Home" currentPage="home" /> 

      {/* Black Box Section with Title */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '40px' }}>
        <img 
          src={require('./cuet.png')} 
          alt="CUET Logo" 
          style={{ width: '250px', height: 'auto', borderRadius: '12px', marginRight: '60px' }} 
        />
        
        <div style={{ marginLeft: '200px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
            Welcome to <span style={{ color: '#E65100' }}>CUET</span> Security System
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '600px' }}>
            Your campus security, simplified and smarter. Our system offers an advanced platform to 
            manage security operations seamlessly at Chittagong University of Engineering and Technology (CUET). 
            From real-time monitoring and roster management to advanced access control, we ensure a safer, 
            more organized campus experience for everyone. Empowering security officers, staff, and management 
            with efficient tools to safeguard CUET—because your safety is our priority.
          </p>
        </div>
      </div>

      {/* Attractive AllApprovePost Section */}
      <div style={{ backgroundColor: '#f8f9fa', padding: '50px', borderRadius: '12px', textAlign: 'center', margin: '40px auto', maxWidth: '90%' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>Approved Posts</h2>
        <button 
          style={{ 
            fontSize: '1.1rem', 
            color: '#fff', 
            backgroundColor: '#E65100', 
            border: 'none', 
            padding: '10px 20px', 
            borderRadius: '8px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}
          onClick={() => setShowApprovedPosts(!showApprovedPosts)}
        >
          {showApprovedPosts ? 'Hide Approved Posts' : 'Check Out Approved Posts'}
        </button>
        {showApprovedPosts && (
          <div style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff', padding: '20px', marginTop: '20px' }}>
            <AllApprovePost />
          </div>
        )}
      </div>


      <FooterTwo />
    </>
  );
}

export default HomeDefault;
