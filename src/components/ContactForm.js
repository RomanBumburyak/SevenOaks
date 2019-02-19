

// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.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
//   );
// const msg = {
//   to: 'romanbumburyak@gmail.com',
//   from: 'test@example.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);

import React from 'react';
import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';


const ContactForm = () => (
  <Form render={({
    submitForm
  }) => (
    <form onSubmit={submitForm}>
    <h1 style={{color:'black'}}> Contact Us </h1>
     <h3>Please fill out your contact information, and a team member will reach out shortly.</h3>
      <Text field="firstName" placeholder='First Name' />

      <Text field="lastName" placeholder='Last Name' />
      <Text field="emailAddress" placeholder='Email' />
      <RadioGroup field="gender">
        <Radio value="Subscribe" />

      </RadioGroup>
      <h3>Please Explain your needs</h3>
      <TextArea style={{height:'100px'}}field="bio" placeholder='Enter a description' />
      <br/>
      <h5>Privacy Agreement</h5>
      <Checkbox field="agreesToTerms"/>
      <br/>
      <button style={{backgroundColor:'black', width:'80px'}}type="submit">Submit</button>
    </form>
  )} />
)

export default ContactForm;


//Contact Form's CSS is linked through the Contact.js Class
