// import './App.css'
import toast, { Toaster } from 'react-hot-toast';
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Project from "./Components/Project"
import Skills from "./Components/Skills"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
function App() {
  return (
    <>
      <div className='dark:bg-gray-950 dark:text-white'>
        <Navbar />
        <Home />
        <About />
        <Project />
        <Skills />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  )
}

export default App
