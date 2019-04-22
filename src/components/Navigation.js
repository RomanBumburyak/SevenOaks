import React from "react";
import { NavLink } from 'react-router-dom';
import "./Navigation.css";



const Navigation = () => {
  return(
  <div className="navigation-parent">
      <div className='header-anchors'>
     
        <div  ><NavLink style={{color:'white'}} to="/"> Home</NavLink></div>
        <div  ><NavLink style={{color:'white'}} to="/About">About</NavLink> </div>
        <div  ><NavLink style={{color:'white'}} to="/Services">Services</NavLink> </div>
        <div  ><NavLink style={{color:'white'}} to="/Contact">Contact</NavLink> </div>
        <div  ><NavLink style={{color:'white'}} to="/Directory">Dirctory</NavLink> </div>

      </div>
    </div>
  );
};


export default Navigation;
