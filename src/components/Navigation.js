import React from "react";
import { NavLink } from 'react-router-dom';
import "./Navigation.css";



const Navigation = () => {
  return(
  <div className="navigation-parent">
      <div className='header-anchors'>
        <div className="head-anchor-tabs"><NavLink to="/">7</NavLink> </div>
        <div className="head-anchor-tabs"><NavLink to="/About">About</NavLink> </div>
        <div className="head-anchor-tabs"><NavLink to="/Contact">Contact</NavLink> </div>
      </div>
    </div>
  );
};


export default Navigation;
