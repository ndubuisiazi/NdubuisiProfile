// ResumeBar.js
import React from 'react';
import { Link } from 'react-router-dom';


function ResumeBar() {
  return (
    <div className="resume-bar">
      <div className="icon-container">
      <button className="download-button" onClick={() => window.open("/path/to/your/pdf", "_blank")}>Download Resume</button>

        <Link to='/regions'><img src={`${process.env.PUBLIC_URL}/regions.svg`} alt="icon1" className="icon" /></Link>
        <Link to='/mufg'><img src={`${process.env.PUBLIC_URL}/mufg.svg`} alt="icon2" className="icon" /></Link>
        <Link to='/jpmc'><img src={`${process.env.PUBLIC_URL}/logo-jpm-brown.svg`} alt="icon3" className="icon" /></Link>
        <Link to='/boa'><img src= {`${process.env.PUBLIC_URL}/BoA.svg`} alt="icon5" className="icon" /></Link>
      </div>
    </div>
  );
}

export default ResumeBar;