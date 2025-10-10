import React from "react";

const Banner = () => {
  return (
    <>
      <section id="banner">
        <div className="nav-container">
          <div className="banner-main">
            <div className="bg">  </div>
            {/* left side of banner  */}
            <div className="banner-left">
              <div className="Name" data-aos="fade-right">
                <h1>SRIJESH BISTA </h1>
              </div>
              <hr />
              <div className="Profession">
                <h1>FRONT-END DEVELOPER</h1>
              </div>
              <hr />
            
            </div>
            {/* right side of banner  */}
            <div className="banner-right" >
              <img src="../sreijesh.png" />
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default Banner;
