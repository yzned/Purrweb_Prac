import React from 'react';
import './Everyone.css'
import MyButton from '../../UI/MyButton/MyButton';
import girl from './girlPNG.png'
const Everyone = () => {

    return (
        <div className='everyone'>
            <div className='everyoneContent'>
                <h1 className='head'>Everyone <p>is an Influencer</p></h1>
                <p className='description'>Budss is a payments as a service and WOM engine dedicated 
                    <p>to acquisition and retention of customers to your business.</p>
                </p>
                <MyButton style={{marginTop:40}}>Contact sales</MyButton>
            </div>
            <img src={girl} alt="" className='everyoneGirl'/>
        </div>
    );
};

export default Everyone;