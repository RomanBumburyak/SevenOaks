import React from 'react';
import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';


const ContactForm = () => (
  <Form render={({
    submitForm
  }) => (
    <form onSubmit={submitForm}>
    <h1 style={{color:'black'}}> Contact Us </h1>
     <h3>Please fill out this basic information and a team member will reach out immedietaly</h3>
      <Text field="firstName" placeholder='First Name' />

      <Text field="lastName" placeholder='Last Name' />
      <Text field="emailAddress" placeholder='Email' />
      <RadioGroup field="gender">
        <Radio value="Subscribe" />

      </RadioGroup>
      <h3>Please Explain your needs</h3>
      <TextArea style={{height:'100px', width:'630px'}}field="bio" placeholder='Enter a description' />
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
