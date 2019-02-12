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


  



<h1 className='main-page-text' > SevenOaks  </h1>
<h2 style={{color:'white', fontSize:'1.3rem', display:'flex',justifyContent:'center',marginTop:'1.3rem'}}> It's currently {new Date().toLocaleTimeString()}.</h2>
<h3 style={{color:'white', fontSize:'1.3rem', display:'flex',justifyContent:'center'}}> Technology professionals,
SevenOaks has 20 years of experience in helping our clients succeed.</h3>


<Particles className='particle-style'
     params= {particleOptTwo}

     />







         <h1 className='center-particle-text'>Do you need help building a Software Solution? </h1>
      



     <div className='home-one'>
       <div className='home-one-div'>
        <h2 style={{color:'white',textAlign:'center', paddingTop:'120px'}}>Back End Development</h2>
        <h1 style={{color:'rgba(0.25, 30, 10, 95)',textAlign:'center', marginTop:'10px'}}>Java, C#, and Database admins</h1>
        <h4 style={{color:'white',textAlign:'center', marginTop:'10px'}}>Commercial and Private development</h4>
      
        <button onClick={this.buttonClicked}> Button Test </button>
        
      </div>
      <div className='home-one-div-two'>
        <h2>Mobile Development</h2>
        

     </div>
     <div className='home-one-div-three'>
       <h2 style={{color:'white'}}>Scalability & Support  </h2>
     

    </div>
    <div className='home-one-div-four'>
      <h2 style={{color:'white', fontSize:'2rem'}}>Personal attention to each project </h2>


   </div>



    </div>





    </div>

</div>

 )

  }




}




export default HomePage;
