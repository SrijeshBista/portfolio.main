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
          <button className="git">
            <a
              href="https://github.com/SrijeshBista"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> <p>GIT</p>
            </a>{" "}
          </button>
        </div>
        <div className="social-media">
          <button className="fb">
            <a
              href="https://www.facebook.com/srijesh.bista/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
              <p> Facebook</p>
            </a>{" "}
          </button>
        </div>
        <div className="social-media">
          <button className="linkdin">
            <a
              href="https://www.linkedin.com/in/srijesh-bista-670662309/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <p> Linkdin</p>
            </a>{" "}
          </button>
        </div>
        <div className="social-media">
          <button className="ig">
            <a
              href="https://www.instagram.com/srijesh_bista_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
              <p>Instragram</p>
            </a>{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidenav;
