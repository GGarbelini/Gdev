import React from 'react';
import '../../styles/Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="logo-text">Gdev</div>
    </div>
  );
};

export default Preloader;