import React from 'react'
import Nav from './component/Nav'
import './scss/style.scss';
import Banner from './component/Banner';
import Sidenav from './component/Sidenav';
import WhatIDo from './component/WhatIDo';
const page = () => {
  return (
    <div>
      <Nav/>
      <Banner/>
      <Sidenav/>
      <WhatIDo/>
    </div>
  )
}

export default page
