import React from 'react'
import Nav from './Nav'
import Profile from './Profile'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Footer from './Footer'
import Cordian from './Cordian'

const Body = () => {
  return (
   <div className="w-full min-h-screen bg-gradient-to-br from-purple-300 via-purple-400 to-pink-300 flex flex-col items-center gap-[10px]">

        <Nav/>

        <Profile/>
        <AboutMe/>
        <Skills/>
        <Cordian/>
        <Footer/>

    </div>
  )
}

export default Body