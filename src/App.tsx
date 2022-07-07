import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import "./styles/root.css"
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  )
}

export default App
