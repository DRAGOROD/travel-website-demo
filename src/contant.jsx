import React, { useState } from "react";
import { FaWhatsapp } from 'react-icons/fa'


function Contact(){

const faqs = [
  {
    id: `f1`,
    question: "How do I book a tour with your travel agency?",
    answer: "You can book a tour by selecting your destination, choosing a package, and contacting us through the booking form or our support team."
  },
  {
    id: `f2`,
    question: "Do your tour packages include flights and hotels?",
    answer: "Our packages can include hotels, flights, transportation, sightseeing, and other services depending on the package you choose."
  },
  {
    id: `f3`,
    question: "Can I customize my travel package?",
    answer: "Yes, you can customize your itinerary, accommodation, activities, transportation, and travel dates based on your preferences."
  },
  {
    id: `f4`,
    question: "What is your cancellation and refund policy?",
    answer: "Cancellation and refund policies depend on the destination, package, and booking terms. Our team will provide the applicable policy before you confirm your booking."
  },
  {
    id: `f5`,
    question: "Do you offer both domestic and international tours?",
    answer: "Yes, we offer a wide range of domestic and international tour packages for travelers with different budgets and preferences."
  }
];  

let icons=[FaWhatsapp]

let [show,setShow]=useState(null);

function handleClick(id){
setShow(show===id?null:id)
}


return(
    <div id="contact-container" className="scroll-animation">
        <h3>Reach Out To Us</h3>
       <div id="contact-body">
          <div id="faq-section">
            <div id="top-section" className="scroll-animation">
           {faqs.map((v,i)=>(
          <>
            <div onClick={()=>handleClick(v.id)} className="faq-question"><span>{v.question}</span><span style={show===v.id?{display:'inline-block',transform:`rotate(180deg)`,transition:`0.4s ease`,color:'aqua'}:{}}>▲</span></div>
            {show===v.id && (<p className="faq-answer">{v.answer}</p>)}
           </>
           ))} 
           </div>
           <div id="bottom-section" className="scroll-animation">
                {icons.map((Icon,i)=><div key={i} data-message="Contact Us On WhatsApp"><Icon/></div>)}
           </div>
          </div>
          <div id="form-section">
           <form id="contact-form" className="scroll-animation">
            <h5>Send Us a Message:</h5>
            <div>
                <input type="text"/>
                <label>Name</label>
            </div>
            <div>
                <input type="number"/>
                <label>Phone</label>
            </div>
            <div>
                <input type="email"/>
                <label>Email</label>
            </div>
            <div>
                <textarea/>
                <label>Message</label>
            </div>
            <div onMouseOver={(x)=>{x.currentTarget.querySelector('span').style.transform='rotate(-60deg)',x.currentTarget.querySelector('span').style.transition='0.4s ease',x.currentTarget.querySelector('span').style.color='aqua'}} onMouseOut={(x)=>{x.currentTarget.querySelector('span').style.transform='rotate(0)',x.currentTarget.querySelector('span').style.color='white'}}>Send Message <span style={{display:'inline-block'}}>➤</span></div>
           </form>
          </div>
        </div>
    </div>
)

}


export default Contact;