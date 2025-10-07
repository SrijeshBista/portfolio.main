import React from 'react'
import Nav from './component/Nav'
import './scss/style.scss';
import Banner from './component/Banner';
import Sidenav from './component/Sidenav';
const page = () => {
  return (
    <div>
      <Nav/>
      <Banner/>
      <Sidenav/>
    </div>
  )
}

export default page
