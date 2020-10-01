import React from "react";
import { NavLink } from 'react-router-dom';
import "./Navigation.css";



const Navigation = () => {
  return(
  <div className="navigation-parent">

    
          <ul className='header-anchors'>
              <li  ><NavLink  to="/"> Home</NavLink></li>
              <li  ><NavLink  to="/ExMenu">ExMenu</NavLink> </li>
              <li  ><NavLink  to="/About">About</NavLink> </li>
              <li  ><NavLink  to="/Services">Services</NavLink> </li>
              <li  ><NavLink  to="/Contact">Contact</NavLink> </li>
              <li  ><NavLink  to="/Directory">Dirctory</NavLink> </li>
              <li className="logo-location"></li>
           </ul>
      <div className='flexed'>

      </div>
    </div>
  );
};


export default Navigation;
