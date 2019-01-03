import React from "react";
import "./HomePage.css";
import Particles from 'react-particles-js';





const particleOpt = {

    particles: {
      number: {
        value: 240,
        density:{
          enable: true,
          value_area:600,
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
           params= {particleOpt}

           />
    </div>



<h1 className='main-page-text' > SevenOaks</h1>

<Particles className='particle-style'
     params= {particleOptTwo}

     />
<p className='main-page-paragraph'>Technology professionals,
SevenOaks has 20 years of experience in helping our clients succeed.</p>






         <h1 className='center-particle-text'>Do you need help building a Software Solution? </h1>




     <div className='home-one'>


    </div>

    <div className='Anchor-wat-center'>

        <div className='Anchor-wat-one'>

        </div>

        <div className='Anchor-wat-two'>

        </div>

        <div className='Anchor-wat-three'>

        </div>


    </div>




    </div>

 )

  }




}




export default HomePage;
