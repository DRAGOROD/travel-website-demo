import React, { useEffect,useRef,useState } from "react";
import D_c from './assets/d_c.webp'
import P_c from './assets/p_c.webp'
import C_c from './assets/c_c.webp'

function Count(){

/*Counting Section */
let [destinationCount,setDestinationCount]=useState(0);
let [packagesCount,setPackagesCount]=useState(0);
let [clientCount,setClientCount]=useState(0);

function setDestination(x,n,setCount){
    let i=0
let interval=setInterval(()=>{
    i++
    setCount(i)
if(i>=n){
clearInterval(interval)
}
},1*x)    

  }


  /*Count Trigger on Screen Entry Setting Up*/
let countSecRef=useRef(null)

useEffect(()=>{
  let observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
             setDestination(20,200,setDestinationCount)
             setDestination(20,300,setPackagesCount)
             setDestination(0,2000,setClientCount)
             observer.unobserve(entry.target)
        }
    })
  },{threshold:0.5})
  observer.observe(countSecRef.current)
return ()=>observer.disconnect()
},[])


return (
    <div id="count-container" ref={countSecRef}>
       <div className="scroll-animation">
        <span><img src={D_c} alt="Destination Image"/></span>
        <span>{destinationCount}+</span>
        <span>Destinations</span>
      </div>
       <div className="scroll-animation">
        <span><img src={P_c} alt="Packages Image"/></span>
        <span>{packagesCount}+</span>
        <span>Packages</span>
       </div>
       <div className="scroll-animation">
        <span><img src={C_c} alt="Clients Image"/></span>
        <span>{clientCount}+</span>
        <span>Clients</span>
       </div>
    </div>
)

}


export default Count;