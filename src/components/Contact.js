import React from 'react';
import "./Contact.css";
import ContactForm from './ContactForm';
import Particles from 'react-particles-js';
import MapContainer from './MapContainer';


const particleOptThree = {

    particles: {
      number: {
        value: 240,
        density:{
          enable: true,
          value_area:500,
        }
      }
    }


}
const Contact = () => {
  return (
    <div className="main-contact-div">

        <div className="main-contact-div-two">

          <div>
              <ContactForm  />
              <Particles className='under-nav-particles'
                     params= {particleOptThree}

                     />
         </div>
          <MapContainer/>
        </div>



    </div>


  );
};

export default Contact;
