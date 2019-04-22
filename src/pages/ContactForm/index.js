import React from 'react';
// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '.././components/TextInput';
import SaveBar from '.././components/SaveBar';


// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: 'romanbumburyak@gmail.com',
//   from: 'test@example.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);


// Contact form is the FormPage

//Contact Form's CSS is linked through the Contact.js Class

class ContactForm extends React.Component {
  componentWillMount() {
    this.props.setUpEditableForm();
  }

  render() {
    const {
      addChange,
      discardChanges,
      formView,
      formEdit,
      hasChanged,
      saveChanges,
    } = this.props;

    if (!formEdit || !formView){
      return <span>Loading ...</span>;
    }
    return (
      <div>
        <h1>{formView.title}</h1>
        {/* {   } title goes inside braces */}
        <TextInput
          handleChange= {(newValue)=> addChange('title', newValue)}
          title="Title"
          value={formEdit.title}
          />

          <TextInput
          handleChange={(newValue) => addChange('field', newValue )}
          title=" Ramdom Field"
          value={formEdit.field}
          
          />

          <SaveBar 
          onDiscardAction={discardChanges}
          open={hasChanged}
          onSaveAction= {saveChanges}
          />

       </div>
    )
  }
}

ContactForm.prototypes = {
  addChange: PropTypes.func.isRequired,
  discardChanges: PropTypes.func.isRequired,
  formView: PropTypes.shape({
    title: PropTypes.string,
    field: PropTypes.string,
  }),
  formEdit: PropTypes.shape({
    title: PropTypes.string,
    field: PropTypes.string,
    
  }),
  hasChanged: PropTypes.bool,
  saveChanges: PropTypes.func.isRequired,
  setUpEditableForm: PropTypes.func.isRequired,
};

ContactForm.defaultProps = {
  formView: null,
  formEdit: null,
  hasChanged: true,
};




export default ContactForm;