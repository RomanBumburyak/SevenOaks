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

<div className='home-page-parent'>

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
       <div className='home-one-div'>
        <h2 style={{color:'white',textAlign:'center', paddingTop:'120px'}}>Back End Development</h2>
        <h3 style={{color:'dodgerBlue',textAlign:'center', marginTop:'10px'}}>Java, C#, and Database admins</h3>
        <h4 style={{color:'white',textAlign:'center', marginTop:'10px'}}>Commercial and Private development</h4>

      </div>
      <div className='home-one-div-two'>
        <h2>Mobile Development</h2>


     </div>
     <div className='home-one-div-three'>
       <h2 style={{color:'white'}}>Scalability & Support </h2>


    </div>
    <div className='home-one-div-four'>
      <h2 style={{color:'white'}}>Personal attention to each project </h2>


   </div>



    </div>

    <div className='Anchor-wat-center'>

        <div className='Anchor-wat-one'>

        </div>





    </div>




    </div>

</div>

 )

  }




}




export default HomePage;
