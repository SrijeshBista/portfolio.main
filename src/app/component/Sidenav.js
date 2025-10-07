import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Sidenav = () => {
  return (
    <section id="sidebar">
      <div className="sidemain">
        <div className="social-media">
         <button className="git"><a href="#"><FaGithub /> <p>GIT</p></a> </button>
        </div>
        <div className="social-media">
         <button className="fb"><a href="#"><FaFacebook /><p> Facebook</p></a> </button> 
        </div>
        <div className="social-media">
         <button className="linkdin"><a href="#"><FaLinkedin /><p> Linkdin</p></a> </button> 
        </div>
        <div className="social-media">
         <button className="ig"><a href="#"><FaInstagram /><p>Instragram</p></a> </button> 
        </div>
      </div>
    </section>
  );
};

export default Sidenav;
