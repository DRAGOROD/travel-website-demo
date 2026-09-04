import react from 'react'
import K_Slide from './assets/k_slide.mp4'
import Kr_Slide from './assets/kr_slide.mp4'
import Ks_Slide from './assets/ks_slide.mp4'
import R_Slide from './assets/r_slide.mp4'
import Sk_Slide from './assets/sk_slide.mp4'

import {useEffect,useRef} from 'react'

function Hero(){

let sliderClips = [
    {
        name: "SIKKIM",
        src: Sk_Slide,
        places: [
            "Gangtok",
            "Tsomgo Lake",
            "Nathula Pass",
            "Pelling",
            "Yuksom"
        ]
    },
    {   
        name: "KASHMIR",
        src: Ks_Slide,
        places: [
            "Srinagar",
            "Gulmarg",
            "Pahalgam",
            "Sonamarg",
            "Dal Lake"
        ]
    },
    {
        name: "KARNATAKA",
        src: Kr_Slide,
        places: [
            "Coorg",
            "Hampi",
            "Mysore",
            "Gokarna",
            "Jog Falls"
        ]
    },
    {
        name: "RAJASTHAN",
        src: R_Slide,
        places: [
            "Jaipur",
            "Jaisalmer",
            "Jodhpur",
            "Udaipur",
            "Mount Abu"
        ],
        cta: "Book Now"
    },
    {
        name: "KERALA",
        src: K_Slide,
        places: [
            "Munnar",
            "Alleppey",
            "Thekkady",
            "Kochi",
            "Varkala"
        ]
    }
];

let containerRef=useRef(null);

useEffect(()=>{
    let slides=containerRef.current.querySelectorAll(".slide");
    const observer = new IntersectionObserver((entries)=>{
         entries.forEach((entry)=>{
            let video=entry.target.querySelector("video");
            let heading=entry.target.querySelector("h4")
            let places=entry.target.querySelectorAll("span")
            let button=entry.target.querySelector("div");
            if(entry.isIntersecting){
                heading.classList.add("name")
                places.forEach((p)=>p.classList.add("points"))
                button.classList.add("hero-btn")
                video.currentTime=0;
                video.play();
            }else{
                video.pause();
                heading.classList.remove("name")
                places.forEach((p)=>p.classList.remove("points"))
                button.classList.remove("hero-btn")
            }
         })
    },{root:containerRef.current,threshold:0.8})
     slides.forEach((slide)=>observer.observe(slide))
},[]);

return (
    <>
     <div id="hero-container">
        <div id="slider-container" ref={containerRef}>
            {sliderClips.map((value,index)=>
            <div key={index} className="slide">
                <video src={value.src} loop/>
                <h4>{value.name}</h4>
                <span>
                {value.places.map((v,i)=><li key={i}>{v}</li>)}
                </span>
                <div><span className="herobtn-cover">Explore Now</span></div>
            </div>)}
        </div>
     </div>
    </>
)

}

export default Hero;