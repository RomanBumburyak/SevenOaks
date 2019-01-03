import React from "react";
import { NavLink } from 'react-router-dom';
import "./Navigation.css";



const Navigation = () => {
  return(
  <div className='top-header'>

          <NavLink to="/"activeStyle={{fontWeight: "bold",color: "black"}}>7</NavLink>

          <NavLink to="/About"activeStyle={{fontWeight: "bold",color: "black"}}>About</NavLink>
          <NavLink to="/Contact"activeStyle={{fontWeight: "bold",color: "black"}}>Contact</NavLink>
        
    </div>
  );
};


export default Navigation;
