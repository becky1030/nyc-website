// can not change button to image

import React from "react";
import String from "../assets/string.png";
import SubmitButton from "../assets/submit.png";
import Scream from "../assets/scream.png";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{
          backgroundColor: "#fff200",
          backgroundImage: `url(${Scream})`,
        }}
      ></div>
      <div className="rightSide">

        <h1> Want to put a picture here!!!</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          {/* <button><img src="submit" alt="my image"/></button> */}
          <button
            type="submit"
            style={{ backgroundImage: `url(${SubmitButton})`,
           }}
          ></button>
        </form>
      </div>
    </div>
  );
}

export default Contact;












