import React from 'react'
import Nav from './component/Nav'
import './scss/style.scss';
import Banner from './component/Banner';
import Sidenav from './component/Sidenav';
import WhatIDo from './component/WhatIDo';
import Aboutme from './component/Aboutme';
import TechiWork from './component/TechiWork';
import Project from './component/Project';
import Contact from './component/Contact';

const page = () => {
  return (
    <div>
      {/* <Nav/> */}
      <Banner/>
      <Sidenav/>
      <WhatIDo/>
      <Aboutme/>
      <TechiWork/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default page
