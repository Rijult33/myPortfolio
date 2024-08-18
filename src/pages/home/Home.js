import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Buttonn from '../../components/button/Buttonn'

const Home = () => {
  return (
    <div className='home'>
      <div className='hnavbar'>
      <div className='text'>Rijul Thakur</div>
      <Navbar/>
      </div>
      <div className='main'>
        <div className='image'></div>
        <div className='fields'>
          <h1>Hello I'm</h1>
          <h2>Rijul Thakur</h2>
          <h3>Programmer, developer</h3>
          <div className='buttongrp'>
          <a href="https://drive.google.com/file/d/12jXMTSLYtG-FFc3oSZ_V4U-DBv82Etx2/view?usp=drive_link" target="blank"> <Buttonn text = 'Download CV'/></a>
          
          <a href="#contact"> <Buttonn text = 'Contact Info'/> </a> 
          </div>
          <div className='socials'>
          <a href="https://github.com/Rijult33" target="blank"><div className='gh'></div></a>
            <a href="https://www.linkedin.com/in/rijul-thakur-980aa7238/" target="blank"> <div className='ld'></div> </a>

          </div>
        </div>

      </div>

      

    </div>
  )
}

export default Home
