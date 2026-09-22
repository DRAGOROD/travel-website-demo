import react, { useContext, useEffect, useState } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaGoogle, FaWhatsapp } from 'react-icons/fa'
import Logo from './assets/logo.webp'

import { contextRef } from './App'

function Navbar() {

let socialIcons = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaGoogle, FaWhatsapp]   

let {homeRef,packagesRef,serviceRef,galleryRef,contactRef}=useContext(contextRef)

let [phoneScreen,setPhoneScreen]=useState(false)
let [expandedMenu,setExpandedMenu]=useState(false)

useEffect(()=>{
function screenResizeing(){    
    if(window.innerWidth<799){
        setPhoneScreen(true)
    }else{
        setPhoneScreen(false)
    }
}
 
   screenResizeing()

    window.addEventListener('resize',screenResizeing);
return ()=>removeEventListener('resize',screenResizeing);
},[])

function clickHandle(){
    if(expandedMenu===false){
        setExpandedMenu(true)
    }else{
        setExpandedMenu(false)
    }
}

return(
    <>
    <div id="top-bar">
        <div id="info">
            <span>✉ TravelAgency@email.com</span>
            <span>✆ 555-555-5555</span>
        </div>
        <div id="social">
           {socialIcons.map((Icon, index) => (
                <span>
                <Icon key={index} />
                </span>
            ))}
        </div>
    </div>
    <div id="navbar">
        <img src={Logo} alt="Website Logo"/>
        {phoneScreen ? (
        <>
        <div id="hamburger-menu" onClick={clickHandle}>☰</div>
        {expandedMenu ? (<ul id="expanded-nav-links">
            <li onClick={()=>homeRef.current.scrollIntoView({behavior:"smooth"})}>🏠︎</li>
            <li onClick={()=>packagesRef.current.scrollIntoView({behavior:"smooth"})}>Packages</li>
            <li onClick={()=>serviceRef.current.scrollIntoView({behavior:"smooth"})}>Our Services</li>
            <li onClick={()=>galleryRef.current.scrollIntoView({behavior:"smooth"})}>Gallary</li>
            <li onClick={()=>contactRef.current.scrollIntoView({behavior:"smooth"})}>Contact Us</li>
            <li>_</li>
        </ul>):""}
        </>
        ):
        (<ul id="nav-links">
            <li onClick={()=>homeRef.current.scrollIntoView({behavior:"smooth"})}>🏠︎</li>
            <li onClick={()=>packagesRef.current.scrollIntoView({behavior:"smooth"})}>Packages</li>
            <li onClick={()=>serviceRef.current.scrollIntoView({behavior:"smooth"})}>Our Services</li>
            <li onClick={()=>galleryRef.current.scrollIntoView({behavior:"smooth"})}>Gallary</li>
            <li onClick={()=>contactRef.current.scrollIntoView({behavior:"smooth"})}>Contact Us</li>
        </ul>)}
        <div><span>➜]</span> Sign In/Register</div>
    </div>
    </>
)

}


export default Navbar;