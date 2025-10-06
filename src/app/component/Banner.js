import React from "react";

const Banner = () => {
  return (
    <>
      <section id="banner">
        <div className="nav-container">
          <div className="banner-main">
            {/* left side of banner  */}
            <div className="banner-left">
              <div className="Name"><h1>SRIJESH BISTA</h1></div>
              <hr/>
              <div className="Profession"><h1>Front-End Developer</h1></div>
              <hr/>
              <div className=""></div>
            </div>
            {/* right side of banner  */}
            <div className="banner-right">
              <img src="../banner.png" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
