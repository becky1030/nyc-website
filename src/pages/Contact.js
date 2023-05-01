import React from "react";
import String from "../assets/string.png";
import SubmitButton from "../assets/submit.png";
import Scream from "../assets/scream.png";
import "../styles/Contact.css";
import { Link } from "react-router-dom";
import string from "../assets/string.png";


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

        <h1><img src={string} style={{width:500, height:280}}/></h1>

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
          {/* <button
            type="submit"
            style={{ backgroundImage: `url(${SubmitButton})`,
           }}

           
          ></button> */}
           <Link to="https://www.link.nyc/how-to-connect.html">
      <button className="btn">SUBMIT</button>
    </Link>
        </form>
      </div>
    </div>
  );
}

export default Contact;












