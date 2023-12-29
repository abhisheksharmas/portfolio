import React, {useContext,useState, useRef } from 'react'
import "./contacts.css"
import phone from "../../img/phone.webp";
import address from "../../img/address.png";
import email from "../../img/email.png";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";


function Contacts() {
    const formref=useRef();
    const [done,setDone]=useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_yid83vt', 'template_dd7aold', formref.current, 'P5HRA07VA3RO3SMmM')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <div className='c'>
        <div className='c-bg'></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className='c-title'>Let's discuss Your Project</h1>
                <div className='c-info'>
                    <div className="c-info-item">
                        <img src={phone} alt="" className='c-icon' />
                        +918448707547
                    </div>
                </div>
                <div className='c-info'>
                    <div className="c-info-item">
                        <img src={email} alt="" className='c-icon'/>
                        abhishekshrm0014@gmail.com
                    </div>
                </div>
                <div className='c-info'>
                    <div className="c-info-item">
                        <img src={address} alt="" className='c-icon'/>
                        BE-342,Hari Nagar,New Delhi
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story?</b>Get in touch.Ready to change the world with your skills 
                </p>
                <form ref={formref} onSubmit={handleSubmit}>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                    <button>Submit</button>
                    {done && "Thanku"}
                </form>
            
            </div>
        </div> 
    </div>
  )
}

export default Contacts