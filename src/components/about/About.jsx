import React from 'react'
import "./about.css"
function About() {
  return (
    <div className='a'>
        <div className='a-left'>
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://pbs.twimg.com/media/E0E4jalWEAMvpUn.jpg" alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">I like doing code,but it is not the thing i love to do everytime</p>
            <p className="a-desc">When I'm not coding then I'll either be dancing or I'm playing football. I can do these things all day.I love to play football because it keeps me fit and active.My favourite player is Ronaldo not because he plays very well but because he taught me that hard work is the key to success.   
</p>
             
        </div>
    </div>
  )
}

export default About