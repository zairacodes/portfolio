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
            "Thank you so much for reaching out! Your message is on its way – I can't wait to read it!"
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
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-text">I'd love to hear from you!</p>
      <p className="contact-text">
        Feel free to connect with me on{" "}
        <a href="https://www.linkedin.com/in/zaira-n">
          <img
            src="https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white"
            alt="LinkedIn badge"
          />
        </a>{" "}
        or check out my projects on{" "}
        <a href="https://github.com/zairacodes">
          <img
            src="https://img.shields.io/badge/-GitHub-black?style=flat&logo=GitHub&logoColor=white"
            alt="GitHub badge"
          />
        </a>
        .
      </p>
      <p className="contact-text">
        If you have any questions or opportunities you'd like to discuss, or
        just want to say hi, drop me a message below!
      </p>
      <form onSubmit={sendEmail} className="contactform">
        <label htmlFor="user_name">Name</label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          placeholder="Hey! What's your name?"
          required
        />
        <label htmlFor="user_email">Email</label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          placeholder="How can I reach you?"
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="I'm all ears, let's chat!"
          required
        />
        <input type="submit" value="Send" disabled={isSubmitting} />
        {stateMessage && <p>{stateMessage}</p>}
      </form>
    </section>
  );
}

export default Contact;
