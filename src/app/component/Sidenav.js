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
         <button className="git"><a href="https://github.com/SrijeshBista"><FaGithub /> <p>GIT</p></a> </button>
        </div>
        <div className="social-media">
         <button className="fb"><a href="https://www.facebook.com/srijesh.bista/"><FaFacebook /><p> Facebook</p></a> </button> 
        </div>
        <div className="social-media">
         <button className="linkdin"><a href="https://www.linkedin.com/in/srijesh-bista-670662309/"><FaLinkedin /><p> Linkdin</p></a> </button> 
        </div>
        <div className="social-media">
         <button className="ig"><a href="https://www.instagram.com/srijesh_bista_/"><FaInstagram /><p>Instragram</p></a> </button> 
        </div>
      </div>
    </section>
  );
};

export default Sidenav;
