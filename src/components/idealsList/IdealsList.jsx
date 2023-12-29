import React from 'react'
import "./idealsList.css";
import Ideals from '../ideals/Ideals';
import {arr} from "../../data";
function  IdealsList() {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className='p-title'>MY PROJECTS</h1>
        <p className="pl-desc">
          <strong>Ecommerce Dashboard Power BI,Heart Disease Prediction,Credit Card Fraud Detection </strong></p>
      </div>
      <div className='pl-list'>
        {arr.map((item)=>(
          <Ideals key={item.id} img={item.img} link={item.link}/>
          ))}
        
      </div>
    </div>
  )
}

export default  IdealsList