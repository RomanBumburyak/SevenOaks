import React from "react";
import "./HomePage.css";
import Particles from 'react-particles-js';

const particleOpt = {
    particles: {
      number: {
        value: 160,
        density:{
          enable: true,
          value_area:500,
        }
      }
    }
}
const particleOptTwo = {

    particles: {
      number: {
        value: 150,
        density:{
          enable: true,
          value_area:500,
        }
      }
    }
}

class HomePage extends React.Component{
   render(){
    return(
      <div className='home-page-main' >
         <Particles className='under-nav-particles'
               params= {particleOpt}
           />
          <div className='home-title-info'>
              <h1 className='home-title'> 7</h1>
          </div>
          <Particles className='under-nav-particles'
               params= {particleOpt}
           />







      </div>
   );
  }
}




export default HomePage;
