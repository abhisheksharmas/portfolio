import React from 'react'
import "./ideals.css"
export default function Ideals({img,link}) {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        
      </div>
      <a href={link}>
        <img src={img} alt="" className='p-img'/>
      </a>
    </div>
  )
}
