import React from 'react';
import './HowWorks.css'
import phone from "./phone.png";
import Marquee from "react-fast-marquee";
const HowWorks = () => {
    return (
        <div className='HowWorks'>
            <Marquee direction='rigth'> 
                    <div className='Slide_item' style={{color:"#2FDBBC"}}>
                        How Budds Works
                    </div>
                    <div className='Slide_item' style={{color: "#181818", WebkitTextStroke: " 1px #444444"}}>
                        How Budds Works
                    </div>
            </Marquee>
            <Marquee > 
                    <div className='Slide_item' style={{color:"#A64CED"}}>
                        How Budds Works
                    </div>
                    <div className='Slide_item' style={{color: "#181818", WebkitTextStroke: " 1px #444444"}}>
                        How Budds Works
                    </div>
            </Marquee>
            <Marquee className='howSlide' direction='rigth'> 
                    <div className='Slide_item' style={{color:"#FFAA4C"}}>
                        How Budds Works
                    </div>
                    <div className='Slide_item' style={{color: "#181818", WebkitTextStroke: " 1px #444444"}}>
                        How Budds Works
                    </div>
            </Marquee>
            <div className='phoneImg'>
                <img src={phone} alt="" />
            </div>
        </div>
    );
};

export default HowWorks;