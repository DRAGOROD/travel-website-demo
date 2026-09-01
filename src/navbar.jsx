import react from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaGoogle } from 'react-icons/fa'
import Logo from './assets/logo.webp'

function Navbar() {

let socialIcons = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaGoogle]    

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
        <ul id="nav-links">
            <li>🏠︎</li>
            <li>Packages</li>
            <li>Our Services</li>
            <li>Gallary</li>
            <li>Contact Us</li>
        </ul>
        <div><span>➜]</span> Sign In/Register</div>
    </div>
    </>
)

}


export default Navbar;