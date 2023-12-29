import React from 'react'
import "./intro.css"
import user from "../../img/user2.png";
function Intro() {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello,My name is</h2>
                    <h1 className='i-name'>Abhishek Sharma</h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Data Analyst</div>
                            <div className='i-title-item'>Dancer</div>
                            <div className='i-title-item'>Footballer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I'm a Full Stack Web Developer.I enjoy taking complex problems and turning them into simple and beautiful interface designs.I also love the logic and structure of coding and always strive to write ellegant and efficient code.



                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className='i-bg'></div>
                <img src={user} alt="" className="i-img" />
                
            </div>
        </div>
    )
}

export default Intro