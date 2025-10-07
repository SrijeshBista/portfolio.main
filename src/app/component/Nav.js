"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [hamopen, sethamopen] = useState(false);

  const hamburgeropen = () => sethamopen(true);
  const hamburgerclose = () => sethamopen(false);

  return (
    <>
      <header>
        <nav>
          <div className="nav-container">
            <div className="nav-main">
              <div className="logo">
                <img src="../Srijeshbistalogo.png" alt="logo" />
              </div>

              <div className="hamburger">
                <div className="nav-btn">
                  <button className="btn">
                    <span className="btn-text-one">Get In Touch</span>
                    <span className="btn-text-two">Now!</span>
                  </button>
                </div>

                <div className="icon">
                  <button onClick={hamburgeropen}>
                    <GiHamburgerMenu />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* nav detail */}
        <div className={`nav-inside ${hamopen ? "active" : ""}`}>
          <button className="close-btn" onClick={hamburgerclose}>
            <IoClose />
          </button>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Contact Me</a></li>
          </ul>
        </div>
      </header>
     
    </>
  );
};

export default Nav;
