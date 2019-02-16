import React from "react";
import { NavLink } from 'react-router-dom';
import "./Navigation.css";



const Navigation = () => {
  return(
  <div className="navigation-parent">
      <div className='header-anchors'>
     
        <div  ><NavLink to="/"> Home</NavLink></div>
        <div class="mainguy" ><NavLink to="/About">About</NavLink> Tell us </div>
        <div ><NavLink to="/Contact">Contact</NavLink> </div>
        <div ><NavLink to="/Directory">Dirctory</NavLink> </div>
      </div>
    </div>
  );
};


export default Navigation;
