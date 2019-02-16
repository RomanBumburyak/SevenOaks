import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div className="main-about-section">
      <h1 className="about-header-text">Our Business is to help your Business Grow.</h1>

        <div className="main-about-container">

              <div className="main-about-block-one">
                <h1 className="block-title-tags">We create websites that target your customer-base.</h1>
              </div>
              <div className="main-about-container-two">
              <div class="ui list">
  <div class="item">
    <i class="users icon"></i>
    <div class="content">
      Semantic UI
    </div>
  </div>
  <div class="item">
    <i class="marker icon"></i>
    <div class="content">
      New York, NY
    </div>
  </div>
  <div class="item">
    <i class="mail icon"></i>
    <div class="content">
      <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
    </div>
  </div>
  <div class="item">
    <i class="linkify icon"></i>
    <div class="content">
      <a href="http://www.semantic-ui.com">semantic-ui.com</a>
    </div>
  </div>
</div>
              </div>


        </div>






    </div>




  );
};

export default About;
