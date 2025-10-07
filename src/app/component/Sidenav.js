import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Sidenav = () => {
  return (
     <sidebar>
        <div className="sidemain">
            <div className="social-media">
                <FaGithub/>
                <FaFacebook />
                <FaLinkedin/>
                <FaInstagram/>
            </div>
        </div>
      </sidebar>
  )
}

export default Sidenav;
