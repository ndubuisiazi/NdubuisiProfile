import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/index.css';


function ResumeMenu() {
    const [activePage, setActivePage] = useState('Link 1');

  const handleLinkClick = (link) => {
    setActivePage(link);
  };
  return (
    <div className="resume-menu-bar">
      <div className="resume-menu">
        <NavLink to='/regions' activeClassName='active-link'onClick={() => handleLinkClick('Link 1')} >Regions</NavLink>
        <NavLink to='/mufg' activeClassName='active-link' onClick={() => handleLinkClick('Link 2')}>MUFG</NavLink>
        <NavLink to='/jpmc' activeClassName='active-link' onClick={() => handleLinkClick('Link 3')}>JP Morgan Chase</NavLink>
        <NavLink to='/boa' activeClassName='active-link' onClick={() => handleLinkClick('Link 4')}>Bank of America</NavLink>
      </div>
    </div>
  );
}

export default ResumeMenu;
