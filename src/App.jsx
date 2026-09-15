import Navbar from './navbar'
import Hero from './hero'
import Packages from './packages'
import Other from './other'
import Memories from './memories'
import Contact from './contant'
import Footer from './footer'
import Count from './count'
import { createContext, useRef } from 'react'

export const contextRef=createContext(null)

function App() {

let homeRef=useRef(null);
let packagesRef=useRef(null);
let serviceRef=useRef(null);
let galleryRef=useRef(null);
let contactRef=useRef(null);  



  return (
    <>
<contextRef.Provider value={{homeRef,packagesRef,serviceRef,galleryRef,contactRef}}>
      <Navbar/>
    <div ref={homeRef}>
      <Hero/>
    </div>
    <div ref={packagesRef}>
      <Packages/>
    </div>
    <div ref={serviceRef}>
      <Other/>
    </div>
      <Count/>
    <div ref={galleryRef}>
      <Memories/>
    </div>
    <div ref={contactRef}>
      <Contact/>
    </div>
    <Footer/>
</contextRef.Provider>
    </>
  )
}

export default App
