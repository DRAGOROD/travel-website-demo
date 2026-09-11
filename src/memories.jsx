import React from "react";
import A_g from './assets/a_g.webp'
import Bi_g from './assets/bi_g.webp'
import D_g from './assets/d_g.webp'
import G_g from './assets/g_g.webp'
import J_g from './assets/j_g.webp'
import K_g from './assets/k_g.webp'
import R_g from './assets/r_g.webp'
import Sk_g from './assets/sk_g.webp'
import Sw_g from './assets/sw_g.webp'
import T_g from './assets/t_g.webp'

function Memories(){

const memories = [
  {
    id: `m1`,
    destination: "Kashmir",
    picture: K_g,
    rotate:20
  },
  {
    id: `m2`,
    destination: "Rajasthan",
    picture: R_g,
    rotate:-7
  },
  {
    id: `m3`,
    destination: "Goa",
    picture: G_g,
    rotate:23
  },
  {
    id: `m4`,
    destination: "Sikkim",
    picture: Sk_g,
    rotate:-15
  },
  {
    id: `m5`,
    destination: "Bali, Indonesia",
    picture: Bi_g,
    rotate:25
  },
  {
    id: `m6`,
    destination: "Dubai, UAE",
    picture: D_g,
    rotate:-17
  },
  {
    id: `m7`,
    destination: "Switzerland",
    picture: Sw_g,
    rotate:11
  },
  {
    id: `m8`,
    destination: "Japan",
    picture: J_g,
    rotate:-4
  },
  {
    id: `m9`,
    destination: "Thailand",
    picture: T_g,
    rotate:-25
  },
  {
    id: `m10`,
    destination: "Australia",
    picture: A_g,
    rotate:24
  }
];    

return(
    <div id="gallery-container">
       <h3 id="gallery-heading">Memories</h3> 
       <div id="gallery-body">
         {memories.map((v,i)=>(<div key={i} style={{'--rotate-n':`${v.rotate}deg`}} data-name={v.destination} id={v.id}><img src={v.picture} alt={v.destination}/></div>))}
       </div>
    </div>
)

}

export default Memories;