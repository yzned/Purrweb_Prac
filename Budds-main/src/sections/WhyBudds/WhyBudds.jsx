import React from 'react';
import { useState,useEffect } from 'react';
import "./WhyBudds.css"
import topLeftSmall from './topLeftSmall.png'
import topLeft from './topLeft.png'
import yellowPack from './yellowPackage.svg'
import greenPack from './greenPackage.svg'
import purplePackage from './purplePackage.svg'
import likeBoy from "./likeBoy.svg"
import boyWithPhone from "./boyWithPhone.svg";

const WhyBudds = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
    }, []);
    return (
        <div className='WhyBudds'>
            <div className='WhyBudds_Header'>
                <h1 className='WhyBudds_title'>Why Budds</h1>
                <p className='WhyBudds_Description'>
                    We Provide Advanced Payment Solutions<br /><span className='PurpleBack'>To Grow Your Business</span>
                </p>
            </div>
            <div className='WhyBudds_Frames'>
                <div className='Frames_Top'>
                        <div className='BigFrame Frame'>
                        {width > 800 ?
                            <img src={topLeft} alt="" className='BigFrame_img' />
                        :      
                            <img src={topLeftSmall} alt="" className='topLeftSmall' />
                        }
                        
                            <div className='Frame_Text Frame_Text_topLeft' >
                                <h1 className='Frame_title' >Turn your customers into loyal influencers</h1>
                                <p className='Frame_Info'>Budss helps businesses harness the exponential power of loyal customers for acquisition and retention.</p>
                            </div>
                        </div>
                        <div className='SmallFrame Frame'>
                            <div className='Frame_Text'>
                                <h1 className='Frame_title'>Harness the power of buying in bulk</h1>
                                <p className='Frame_Info'>Get at least 2X more sales with Budss Buying Groups. Your customer base will grow exponentially as your customers add their friends & family to your personalized group.</p>
                            </div>
                            <img src={yellowPack} alt="" className='yellowPacket'/>
                            <img src={greenPack} alt="" className='greenPacket'/>
                            <img src={purplePackage} alt=""className='purplePacket'/>
                        </div>           
                </div>
                <div className='Frames_bottom'>
                        <div className='SmallFrame Frame'>
                            <div className='Frame_Text'>
                                        <h1 className='Frame_title' style={{width:"100%"}}>Supercharge Loyalty With Instant Cash Back</h1>
                                        <p className='Frame_Info' style={{width:"60%"}}>Budss allows for shoppers to earn immediate cash back at their favorite stores.</p>
                            </div>
                            <img src={likeBoy} alt="" style={{position:'absolute',bottom:0,right:0}}/>
                        </div>
                        <div className='BigFrame Frame'>
                            <div className='Frame_Text Frame_Text_botRight'>
                                <h1 className='Frame_title'>Seasoned with AI and Gamification</h1>
                                <p className='Frame_Info Frame_Info_botRight'>AI programming creates a personalized customer journey, offering recommendations for their next purchase and optimizing rewards for after purchase.</p>
                            </div>
                            <img src={boyWithPhone} className='boyWithPhone' alt="" style={{position:'absolute',bottom:0, right:"3%"}}/>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default WhyBudds;