import React from 'react'
import Card from '../../components/Card'
import './Projects.css'
import img1 from '../../assets/ProjectCPU.png'
import img2 from '../../assets/ProjectMail.png'
import img3 from '../../assets/r.png'
const Projects = () => {
  return (
    <div className='wrapper'>

      <div className='texts'>
      <h2>Browse my recent</h2>
      <h1>Projects</h1>
      </div>
      <div className='Cards'>
        <Card name="Mail App" imageUrl={img2} githubLink="https://github.com/Rijult33/mern-mail-app" liveLink="https://mern-mail-app.vercel.app/ "></Card>
        <Card name="Process Scheduler" imageUrl={img1} githubLink="https://github.com/Rijult33/cpu-scheduling-visualizer " liveLink="https://rijult33.github.io/cpu-scheduling-visualizer/ "></Card>
        <Card name="My Portfolio" imageUrl={img3} githubLink="https://github.com/Rijult33/myPortfolio" liveLink=""></Card>
      </div>
    </div>
  )
}

export default Projects
