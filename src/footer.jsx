import React from "react";
import { FaFacebook,FaWhatsapp,FaTwitter,FaInstagram } from "react-icons/fa";
import Logo from './assets/logo.webp'

function Footer(){

let socialLinks=[
    {
        name:'Facebook',
        icon:FaFacebook
    },
     {
        name:'Whatsapp',
        icon:FaWhatsapp
    },
     {
        name:'Twitter',
        icon:FaTwitter
    },
     {
        name:'Instagram',
        icon:FaInstagram
    },
]    

return (
    <>
    <div id="footer-container" >
        <div>
            <img src={Logo} alt="Agency Logo"/>
            <p>Group departures and customized tours across India and abroad, arranged end to end.</p>
        </div>
        <div>
            <h3>Quick Links</h3>
            <p onMouseOver={(x)=>{x.currentTarget.querySelector("span").style.left='3%',x.currentTarget.querySelector("span").style.color='aqua',x.currentTarget.querySelector("span").style.transition='0.4s ease'}}onMouseOut={(x)=>{x.currentTarget.querySelector("span").style.left='0%',x.currentTarget.querySelector("span").style.color='white'}}><span>▸</span>Gallery</p>
            <p onMouseOver={(x)=>{x.currentTarget.querySelector("span").style.left='3%',x.currentTarget.querySelector("span").style.color='aqua',x.currentTarget.querySelector("span").style.transition='0.4s ease'}}onMouseOut={(x)=>{x.currentTarget.querySelector("span").style.left='0%',x.currentTarget.querySelector("span").style.color='white'}}><span>▸</span>Terms & Conditions</p>
            <p onMouseOver={(x)=>{x.currentTarget.querySelector("span").style.left='3%',x.currentTarget.querySelector("span").style.color='aqua',x.currentTarget.querySelector("span").style.transition='0.4s ease'}}onMouseOut={(x)=>{x.currentTarget.querySelector("span").style.left='0%',x.currentTarget.querySelector("span").style.color='white'}}><span>▸</span>Cancellation Policy</p>
            <p onMouseOver={(x)=>{x.currentTarget.querySelector("span").style.left='3%',x.currentTarget.querySelector("span").style.color='aqua',x.currentTarget.querySelector("span").style.transition='0.4s ease'}}onMouseOut={(x)=>{x.currentTarget.querySelector("span").style.left='0%',x.currentTarget.querySelector("span").style.color='white'}}><span>▸</span>Privacy Policy</p>
        </div>
        <div>
             <h3>Contact Us</h3>
            <p onMouseOver={(x)=>{x.currentTarget.querySelector("span").style.left='3%',x.currentTarget.querySelector("span").style.color='aqua',x.currentTarget.querySelector("span").style.transition='0.4s ease'}}onMouseOut={(x)=>{x.currentTarget.querySelector("span").style.left='0%',x.currentTarget.querySelector("span").style.color='white'}}><span>▸</span><a href='tel:8918525848'> 555-555-5555</a></p>
            <p onMouseOver={(x)=>{x.currentTarget.querySelector("span").style.left='3%',x.currentTarget.querySelector("span").style.color='aqua',x.currentTarget.querySelector("span").style.transition='0.4s ease'}}onMouseOut={(x)=>{x.currentTarget.querySelector("span").style.left='0%',x.currentTarget.querySelector("span").style.color='white'}}><span>▸</span>000-000-0000</p>
            <p onMouseOver={(x)=>{x.currentTarget.querySelector("span").style.left='3%',x.currentTarget.querySelector("span").style.color='aqua',x.currentTarget.querySelector("span").style.transition='0.4s ease'}}onMouseOut={(x)=>{x.currentTarget.querySelector("span").style.left='0%',x.currentTarget.querySelector("span").style.color='white'}}><span>▸</span><a href="mailto:jitmishra40@gmail.com">Email1@Email.Com</a></p>
            <p onMouseOver={(x)=>{x.currentTarget.querySelector("span").style.left='3%',x.currentTarget.querySelector("span").style.color='aqua',x.currentTarget.querySelector("span").style.transition='0.4s ease'}}onMouseOut={(x)=>{x.currentTarget.querySelector("span").style.left='0%',x.currentTarget.querySelector("span").style.color='white'}}><span>▸</span> Email2@Email.Com</p>
        </div>
        <div>
            <h3>Social Links</h3>
            {socialLinks.map((v,i)=><p key={i} onMouseOver={(x)=>{x.currentTarget.querySelector("span").style.fontSize='larger',x.currentTarget.querySelector("span").style.color='aqua',x.currentTarget.querySelector("span").style.transition='0.4s ease'}}onMouseOut={(x)=>{x.currentTarget.querySelector("span").style.fontSize='',x.currentTarget.querySelector("span").style.color='white'}}><span><v.icon/></span> {v.name}</p>)}
        </div>
    </div>
    <p id="copyright">CopyRight &copy; 2026, Joy Misra- All Right Reserved</p>
    </>
    )

}

export default Footer;