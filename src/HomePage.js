import axios from 'axios';
import './HomePage.css';
import Particles from 'react-particles-js';
import MapContainer from './MapContainer';
import { BrowserRouter as Router, Route, Link } from "react-router";
import Header from './Header';
import './Header.css' ;



import React from 'react';

const particleOpt = {

    particles: {
      number: {
        value: 290,
        density:{
          enable: true,
          value_area:650,
        }
      }
    }


}

const particleOptTwo = {

    particles: {
      number: {
        value: 290,
        density:{
          enable: true,
          value_area:600,
        }
      }
    }


}


class HomePage extends React.Component{
  render(){
 return(


<div className='body-div'>




  <div className='under-nav-menu'>

    <Particles className='under-nav-particles'
           params= {particleOptTwo}

           />
  </div>


<h1 className='main-page-text' > SevenOaks
<p className='main-page-paragraph'>Technology professionals,
SevenOaks has 20 years of experience in helping our clients succeed.



</p>
<Particles className='particle-style'
       params= {particleOpt}

       />


         <h1 className='center-particle-text'>Do you need help building a Software Solution? </h1>
</h1>


     <div className='home-one'>


    </div>

    <div className='Anchor-wat-center'>

        <div className='Anchor-wat-one'>
          <MapContainer />
        </div>

        <div className='Anchor-wat-two'>

        </div>


    </div>






    </div>

 )

  }




}




export default HomePage;
