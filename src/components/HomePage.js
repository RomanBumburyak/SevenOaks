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


class HomePage extends React.Component{
   render(){
    return(
      <div className='home-page-main' >
         <Particles className='under-nav-particles'
               params= {particleOpt}
           />
          <div className='home-title-info'>
              <div className='home-title'> 7</div>
              <h2>We Create Software and manage your digital assets.</h2>

             

              
          </div>






      </div>
   );
  }
}




export default HomePage;
