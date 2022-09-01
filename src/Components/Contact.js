import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fds39gq', 'template_9pqwwdo', form.current, '7WtyRII418E4slxJe')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact-form'>
        <form ref={form} onSubmit={sendEmail} autocomplete="chrome-off">
            <label>Name</label>
            <input id='' type="text" name="user_name" autocomplete="chrome-off" required/>
            <label>Email</label>
            <input type="email" name="user_email" autocomplete="chrome-off" required/>
            <label>Message</label>
            <textarea name="message" required/>
            <input className='contact-form-submit-btn' autocomplete="chrome-off" type="submit" value="Send" />
        </form>
    </div>
  );
};

export default Contact