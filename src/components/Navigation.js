import React from "react";
import { NavLink } from 'react-router-dom';
import "./Navigation.css";



const Navigation = () => {
  return(
  <div className="navigation-parent">

    
          <div className='header-anchors'>
              <div  ><NavLink  to="/"> Home</NavLink></div>
              <div  ><NavLink  to="/About">About</NavLink> </div>
              <div  ><NavLink  to="/Services">Services</NavLink> </div>
              <div  ><NavLink  to="/Contact">Contact</NavLink> </div>
              <div  ><NavLink  to="/Directory">Dirctory</NavLink> </div>
              <div className="logo-location"></div>
           </div>
      <div className='flexed'>

      </div>
    </div>
  );
};


export default Navigation;
