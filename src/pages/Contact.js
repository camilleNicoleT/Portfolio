import React, { useState } from 'react';
import { useFormspark } from "@formspark/use-formspark";

import { validateEmail } from '../utils/helpers';

const FORMSPARK_FORM_ID = '3iaGzL3H';

const FORMSPARK_ACTION_URL = "https://submit-form.com/3iaGzL3H";

function ContactForm() {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

 const [formState, setFormState] = useState({ name: '', email: '', message: '' });

 const [errorMessage, setErrorMessage] = useState('');
 const { name, email, message } = formState;

 const submitForm = async (e) => {
  e.preventDefault();
    await submit({name, email, message} );
    alert("Form submitted");

  setFormState({ name: '', email: '', message: '' })
};


  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  }

  return (
    <section className='mt-1 mb-20 justify-center flex'>
    <a href="mailto:camillht@gmail.com"> 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 " viewBox="0 0 20 20" fill="currentColor">
  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
</svg>
<h1 className="mr-1" id="email">Email Me</h1>
 </a>


      {/* <form id="contact-form" action="https://submit-form.com/3iaGzL3H" Name="mb-50"onSubmit={submitForm}>
        <div>
          <label for="name">Name:</label>
          <input type="text" 
          name="name" 
          id="name" 
          value={name} 
          onChange={(e) => setFormState(e.target.value)}
          
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" 
          name="email" id="email"  
        
         value={email} 
         onChange={(e) => setFormState(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea rows="5"
          type="text"
          name="message" 
           id="message"
          value={message} 
          onChange={(e) => setFormState(e.target.value)}
          onBlur={handleChange} 
          ></textarea>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" className='btn' disabled={submitting}>Send</button>
      </form> */}
    </section>

  );
}

export default ContactForm;