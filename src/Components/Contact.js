import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fds39gq', 'template_9pqwwdo', form.current, '7WtyRII418E4slxJe')
      .then((result) => {
          form.current.reset();
          emailMessage()
      }, (error) => {
          console.log(error.text);
      });
  };

  function emailMessage(){
    document.getElementById("email-message").innerHTML = "Message sent. Thank you"
    setTimeout(function(){document.getElementById("email-message").innerHTML = ""}, 3000)
  }

  return (
    <div className='contact-form'>
        <form ref={form} onSubmit={sendEmail} autoComplete="chrome-off">
            <label>Name</label>
            <input id='' type="text" name="user_name" autoComplete="chrome-off" required/>
            <label>Email</label>
            <input type="email" name="user_email" autoComplete="chrome-off" required/>
            <label>Message</label>
            <textarea name="message" required/>
            <input className='contact-form-submit-btn' autoComplete="chrome-off" type="submit" value="Send" />
            <label id='email-message'></label>
        </form>
    </div>
  );
};

export default Contact