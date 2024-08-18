import React from 'react'
import './About.css'
import Field from '../../components/aboutfield/Field'
const About = () => {
  return (
    <div className='about'>
        <h1>Get to Know More</h1>
        <h2> About Me</h2>
        <p>I am pursuing my Undergrad in Computer Sciences while maintaining an ambitious mindset and an impluse to seek discomfort.

While I love working with software, when not at work, you can find me in the great outdoors. 

Right now I am looking for an internship opportunity at a mission-driven company where I can share my expertise and learn more. </p>
        <div className='main'>
          <div className='image'></div>
          <div className='education'>
          <h1>Education</h1>
          <div className='educations'>
          <h3> B.Tech - Computer Science Enginnering </h3>
            <h2> Delhi Technological university, New Delhi, India</h2>
            <h2> CGPA : 8.04</h2>
            <hr></hr>
            <h3> Class 12 - CBSE </h3>

            <h2> Parmarth Inernational School, Himachal Pradesh, India</h2>
            <h2> Percentage: 93</h2>
            <hr></hr>
            <h3> Class 10 - ICSE </h3>
            <h2> Mount Carmel School, Himachal Pradesh, India</h2>
            <h2> Percentage: 92</h2>
       
          </div>
          </div>
        </div>
      
    </div>
  )
}

export default About
