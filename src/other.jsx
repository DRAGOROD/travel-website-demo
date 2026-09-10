import React from "react";
import C_o from './assets/c_o.mp4'
import H_o from './assets/h_o.mp4'
import P_o from './assets/p_o.mp4'
import T_o from './assets/t_o.mp4'
import V_o from './assets/v_o.mp4'

function Other(){

const otherServices = [
  {
    type: "flight",
    icon: P_o,
    name: "Flight Booking",
    description: "Find and book comfortable flights to destinations around the world.",
    features: [
      "Domestic & International",
      "Flexible dates",
      "Multiple airlines",
      "Best available fares"
    ],
    cta: "Book Flight"
  },

  {
    type: "hotel",
    icon: H_o,
    name: "Hotel Booking",
    description: "Discover comfortable hotels and stays for a relaxing travel experience.",
    features: [
      "Budget to luxury",
      "Prime locations",
      "Breakfast options",
      "Free cancellation"
    ],
    cta: "Book Hotel"
  },

  {
    type: "cruise",
    icon: C_o,
    name: "Cruise Booking",
    description: "Experience unforgettable journeys across beautiful seas and coastlines.",
    features: [
      "Luxury cruises",
      "Multiple destinations",
      "Onboard entertainment",
      "All-inclusive options"
    ],
    cta: "Book Cruise"
  },

  {
    type: "train",
    icon: T_o,
    name: "Train Booking",
    description: "Plan convenient and scenic train journeys across India and beyond.",
    features: [
      "Multiple classes",
      "Popular routes",
      "Scenic journeys",
      "Easy reservations"
    ],
    cta: "Book Train"
  },

  {
    type: "Vehicle",
    icon: V_o,
    name: "Vehicle Booking",
    description: "Travel comfortably between cities with reliable bus services.",
    features: [
      "AC & Non-AC",
      "Sleeper options",
      "Multiple operators",
      "Flexible schedules"
    ],
    cta: "Book Vehicle"
  }
];

return (
    <div id="otherServices-container">
      <h3 id="otherServices-heading">Other Services</h3>
      <div id="otherServices-body">
        {otherServices.map((v,i)=>(
          <div className="services-card" onMouseOver={(x)=>x.currentTarget.querySelector("video").play()} onMouseOut={(x)=>{x.currentTarget.querySelector("video").pause(),x.currentTarget.querySelector("video").currentTime=0}}>
            <video src={v.icon} loop/>
              <h6>{v.name}</h6>
              {v.features.map(value=><li> {value}</li>)}
              <div data-tooltip={v.cta}>Know More <span>➜</span></div>
          </div>
        ))}
        </div>
    </div>
)

}

export default Other;