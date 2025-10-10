import React from 'react'
import Nav from './component/Nav'
import './scss/style.scss';
import Banner from './component/Banner';
import Sidenav from './component/Sidenav';
import WhatIDo from './component/WhatIDo';
import Aboutme from './component/Aboutme';
const page = () => {
  return (
    <div>
      <Nav/>
      <Banner/>
      <Sidenav/>
      <WhatIDo/>
      <Aboutme/>
    </div>
  )
}

export default page
