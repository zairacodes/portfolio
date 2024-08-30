import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage(
            "Thank you so much for reaching out! Your message is on its way – I can't wait to connect with you!"
          );
          setIsSubmitting(false);
          e.target.reset();
          setTimeout(() => {
            setStateMessage(null);
          }, 10000);
        },
        (error) => {
          setStateMessage(
            "Oops! It looks like there was a problem. Please try sending your message again – thanks for bearing with me!"
          );
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 10000);
        }
      );
  };

  return (
    <section className="contact-container">
      <h1>Contact Me</h1>
      <p>LinkedIn here</p>
      <p>GitHub here</p>
      <form onSubmit={sendEmail}>
        <label htmlFor="user_name">Name</label>
        <input type="text" id="user_name" name="user_name" required />
        <label htmlFor="user_email">Email</label>
        <input type="email" id="user_email" name="user_email" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
        <input type="submit" value="Send" disabled={isSubmitting} />
        {stateMessage && <p>{stateMessage}</p>}
      </form>
    </section>
  );
}

export default Contact;
