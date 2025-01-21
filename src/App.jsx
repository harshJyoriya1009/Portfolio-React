import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Services/>
    <Projects/>
    </>
  )
}

export default App
