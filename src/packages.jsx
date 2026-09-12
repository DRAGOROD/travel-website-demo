import React, { act, useState } from "react";

/*Domestic*/
import G_d from './assets/g_d.mp4'
import Ke_d from './assets/ke_d.mp4'
import Ks_d from './assets/ks_d.mp4'
import Mp_d from './assets/mp_d.mp4'
import R_d from './assets/r_d.mp4'
import S_d from './assets/s_d.mp4'

/*InterNational*/
import A_i from './assets/a_i.mp4'
import B_i from './assets/b_i.mp4'
import D_i from './assets/d_i.mp4'
import J_i from './assets/j_i.mp4'
import S_i from './assets/s_i.mp4'
import T_i from './assets/t_i.mp4'

/*card symbols*/
import L_s from './assets/locationSymbol.webp'
import SL_s from './assets/subLocationSymbol.webp'

function Packages(){



const tours = [
{
    tabId: "t1",
    tabSymbol:"⛴︎",
    tabName:"Domestic",
    destinations: [
      {
        name: "Kerala",
        picture: Ke_d,
        costPerPerson: 25000,
        days: 5,
        places: [
          "Munnar",
          "Alleppey",
          "Thekkady",
          "Kochi",
          "Varkala"
        ]
      },

      {
        name: "Kashmir",
        picture: Ks_d,
        costPerPerson: 30000,
        days: 6,
        places: [
          "Srinagar",
          "Gulmarg",
          "Pahalgam",
          "Sonamarg",
          "Dal Lake"
        ]
      },

      {
        name: "Rajasthan",
        picture: R_d,
        costPerPerson: 22000,
        days: 5,
        places: [
          "Jaipur",
          "Jaisalmer",
          "Jodhpur",
          "Udaipur",
          "Mount Abu"
        ]
      },

      {
        name: "Sikkim",
        picture: S_d,
        costPerPerson: 27000,
        days: 6,
        places: [
          "Gangtok",
          "Tsomgo Lake",
          "Nathula Pass",
          "Pelling",
          "Yuksom"
        ]
      },

      {
        name: "Himachal Pradesh",
        picture: Mp_d,
        costPerPerson: 24000,
        days: 6,
        places: [
          "Manali",
          "Shimla",
          "Kasol",
          "Dharamshala",
          "Dalhousie"
        ]
      },

      {
        name: "Goa",
        picture: G_d,
        costPerPerson: 18000,
        days: 4,
        places: [
          "Baga Beach",
          "Calangute Beach",
          "Fort Aguada",
          "Dudhsagar Falls",
          "Old Goa"
        ]
      }
    ]
  },
  {
    tabId: "t2",
    tabSymbol:"✈︎",
    tabName:"International",
    destinations: [
      {
        name: "Indonesia",
        picture: B_i,
        costPerPerson: 45000,
        days: 6,
        places: [
          "Ubud",
          "Seminyak",
          "Kuta",
          "Nusa Penida",
          "Tanah Lot"
        ]
      },

      {
        name: "Dubai, UAE",
        picture: D_i,
        costPerPerson: 55000,
        days: 5,
        places: [
          "Burj Khalifa",
          "Dubai Marina",
          "Palm Jumeirah",
          "Dubai Mall",
          "Desert Safari"
        ]
      },

      {
        name: "Switzerland",
        picture: S_i,
        costPerPerson: 120000,
        days: 8,
        places: [
          "Zurich",
          "Lucerne",
          "Interlaken",
          "Jungfraujoch",
          "Zermatt"
        ]
      },

      {
        name: "Thailand",
        picture: T_i,
        costPerPerson: 40000,
        days: 6,
        places: [
          "Bangkok",
          "Phuket",
          "Krabi",
          "Phi Phi Islands",
          "Pattaya"
        ]
      },

      {
        name: "Japan",
        picture: J_i,
        costPerPerson: 95000,
        days: 8,
        places: [
          "Tokyo",
          "Kyoto",
          "Osaka",
          "Mount Fuji",
          "Nara"
        ]
      },

      {
        name: "Australia",
        picture: A_i,
        costPerPerson: 110000,
        days: 9,
        places: [
          "Sydney",
          "Melbourne",
          "Great Barrier Reef",
          "Gold Coast",
          "Blue Mountains"
        ]
      }
    ]
  }
];

let [activeId,setActiveId]=useState("all");
let [visible,setVisible]=useState(true);
let [show,setShow]=useState(false);

/*setting tabs */
function handleClick(id){
    if(activeId===id) return;
    setVisible(false)
setTimeout(()=>{
    setActiveId(id)
    setShow(true)
    setVisible(true)},100)
}

let allDestinations=tours.flatMap(tour=>tour.destinations)
let activeTab=tours.find(v=>v.tabId===activeId);

    return(
        <div id="packages_container">
           <h3 id="packages-heading" className="scroll-animation">Our Packages</h3>
           <div id="packages-head" className="scroll-animation">
              <span id="all" className="scroll-animation" onClick={()=>{setActiveId("all");setShow(false)}} style={activeId==="all"?{boxShadow:"2px 0px 0px 6px aqua",color:"aqua"}:{}}><span className="tab-symbol">🌏︎</span> All</span>
              {tours.map((v,i)=>(<span key={i} className="scroll-animation" onClick={()=>handleClick(v.tabId)} style={v.tabId===activeId?{boxShadow:"2px 0px 0px 6px aqua",color:"aqua"}:{}}><span className="tab-symbol">{v.tabSymbol}</span> {v.tabName}</span>))}
              <span className="scroll-animation" onClick={()=>{setActiveId("customized");setShow(true)}} style={activeId==="customized"?{boxShadow:"2px 0px 0px 6px aqua",color:"aqua"}:{}}><span className="tab-symbol">☼</span> Customized</span>
           </div>
           <div className="scroll-animation" id="packages-body" style={activeId==="customized"?{height:'20rem'}:"all"?show?{height:'',overflow:''}:{height:'58.5rem',overflow:'hidden'}:{}}>
            {activeId==="all" ? (allDestinations.map((v,i)=>(
              <div key={i} className={visible?"package-cards":""} onMouseOver={(x)=>x.currentTarget.querySelector("video").play()} onMouseOut={(x)=>{x.currentTarget.querySelector("video").pause();x.currentTarget.querySelector("video").currentTime=0}}>
                    <video src={v.picture} loop/>
                    <p className="duration">⏳️ {v.days} D / {v.days-1} N</p>
                    <h5><img src={L_s} className="card-symbol"/> {v.name}</h5>
                    <p className="places"><img src={SL_s} className="card-symbol"/>{v.places.join(", ")}</p>
                    <p className="cost">₹ {v.costPerPerson}</p>
                </div>
            ))): activeId==="customized"?(
                <form id="custome-form">
                 <div className="form-div">
                  <input type="text"/>
                  <label>Name</label>
                 </div>
                 <div className="form-div">
                  <input type="number"/>
                  <label>Phone</label>
                 </div>
                 <div className="form-div">
                  <input type="number"/>
                  <label>Number Of People</label>
                 </div>
                 <div id="destination-input">
                 <select>
                  <option>Destination:</option>
                  {allDestinations.map((v,i)=>(<option key={i}>{v.name}</option>))}
                 </select>
                 </div>
                 <div id="submit-btn">
                 <span >Submit</span>
                 </div>
             </form>):
            activeTab.destinations.map((v,i)=>(
                <div key={i} className={visible?"package-cards":""} onMouseOver={(x)=>x.currentTarget.querySelector("video").play()} onMouseOut={(x)=>{x.currentTarget.querySelector("video").pause();x.currentTarget.querySelector("video").currentTime=0}}>
                    <video src={v.picture} loop/>
                    <p className="duration">⏳️ {v.days} D / {v.days-1} N</p>
                    <h5><img src={L_s} className="card-symbol"/> {v.name}</h5>
                    <p className="places"><img src={SL_s} className="card-symbol"/>{v.places.join(", ")}</p>
                    <p className="cost">₹ {v.costPerPerson}</p>
                </div>
             ))} 
             <span id="see-all-btn" onClick={()=>setShow(true)} hidden={show===true}>See All&gt;&gt;&gt;</span>
           </div>
        </div>
    )

}

export default Packages;