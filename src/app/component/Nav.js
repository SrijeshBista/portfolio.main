"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [hamopen, sethamopen] = useState(false);
  {
    /* function to open the hamburger popup */
  }
  const hamburgeropen = () => {
    sethamopen(true)
  };
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="nav-main">
              <div className="logo">
                <img src="../Srijeshbistalogo.png" />
              </div>
              <div className="nav-btn">
                <button>Get In Touch</button>
              </div>
              <div className="hamburger">
                <GiHamburgerMenu />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
