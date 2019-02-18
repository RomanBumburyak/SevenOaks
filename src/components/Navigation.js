import React from "react";
import { NavLink } from 'react-router-dom';
import "./Navigation.css";



const Navigation = () => {
  return(
  <div className="navigation-parent">
      <div className='header-anchors'>
     
        <div  ><NavLink style={{color:'black'}} to="/"> Home</NavLink></div>
        <div  ><NavLink style={{color:'black'}} to="/About">About</NavLink> </div>
        <div  ><NavLink style={{color:'black'}} to="/Contact">Contact</NavLink> </div>
        <div  ><NavLink style={{color:'black'}} to="/Directory">Dirctory</NavLink> </div>
      </div>
    </div>
  );
};


export default Navigation;
