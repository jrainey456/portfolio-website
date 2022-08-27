import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hs0kmwd",
        "template_4meply5",
        form.current,
        "l1h5l1fRnfv2qb98w"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact-container" id="contact">
      <h1> Contact Me </h1>
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name..." required />
          <input type="email" name="email" placeholder="Email..." required />
          <textarea name="message" rows="7" placeholder="Message..." required />
          <div className="button-container">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
