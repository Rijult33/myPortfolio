import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="wrapper">
      <div className="ContactBox">
        <h2> Get In Touch </h2>
        <h1> Contact Me</h1>
        <div className="ContactButton">

        <a href="mailto:rijulthakur003@gmail.com" target="blank">
        <div className="email">
        <div className="circle"></div>
        <p>rijulthakur003@gmail.com</p>
      </div>
        </a>
          <a href=" https://www.linkedin.com/in/rijul-thakur-980aa7238/" target="blank"><div className="email">
          <div className="circle"></div>
          <p>LinkedIn</p>
        </div></a>
        </div>
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Contact;
