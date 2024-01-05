import React from 'react';
import './About.css';
import logoR from './logoR.svg';
import chain from './chain.svg';
import loop from './loop.svg';
import zigZag from './zig-zag.svg';
import star from './star.svg';
const About = () => {
    return (
        <div className='About'>
            <h1 className='aboutHeader'>About Budss</h1>
            <div className='AboutContent'>
                <div className='AboutLeft'> 
                    <p className='AboutDescription'>
                        Payment as a service,<br />powered seamlessly by<br /> our <span className='PurpleBack'>network of shoppers</span>
                    </p>
                    <img src={logoR} alt="" className='logoR'/>
                </div>
                <div className='AboutRight'>
                    <div className='RightTop'>
                        <div className='RightItem'>
                            <img src={star} alt="" />
                            <h1 className='ItemTitle'>Contactless</h1>
                            <p className='itemInformation'>Budss uses near field communication (NFC) for making contactless payments.</p>
                        </div>
                        <div className='RightItem'>
                            <img src={loop} alt="" />
                            <h1 className='ItemTitle'>Increased Buying Power</h1>
                            <p className='itemInformation'>Returning customers spend up to 3X more.</p>
                        </div>
                    </div>
                    <div className='RightBottom'>
                        <div className='RightItem'>
                            <img src={zigZag} alt="" />
                            <h1 className='ItemTitle'>Analytics & Insights</h1>
                            <p className='itemInformation'>Gain a holistic view into your customers’ buying behavior & purchasing patterns. </p>
                        </div>
                        <div className='RightItem'>
                            <img src={chain} alt="" />
                            <h1 className='ItemTitle'>Fraud Protection</h1>
                            <p className='itemInformation'>Budss handles all payments with a fraud prevention algorithm to flag high risk purchases & a user set PIN code to keep payment info secure. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;