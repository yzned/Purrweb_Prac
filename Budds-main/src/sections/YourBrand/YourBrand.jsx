import React from 'react';
import './YourBrand.css';
import MyButton from '../../UI/MyButton/MyButton';
import Facebook from "./Facebook - Original.svg";
import Instagram from "./Instagram - Negative.svg";
import TikTok from "./TikTok - Negative.svg";
import Twitter from "./Twitter - Original.svg";
import Clover from "./CompaniesIcons/clover.svg";
import Shopify from "./CompaniesIcons/shopify.svg";
import Square from "./CompaniesIcons/square.svg";
import Squarespace from "./CompaniesIcons/squarespace.svg";
import Woo from "./CompaniesIcons/Woo.svg";
const YourBrand = () => {
    return (
        <div className='YourBrand'>
            <div className="Let_Your_Busines">
              <h1 className="Let_Your_Busines_Header" >Let  Your Business Grow</h1>
              <MyButton style={{border:"none"}}>Contact Sales</MyButton>
            </div>
            <div className="YourBrand_Content">
                <div className="YourBrand_Content_Text">
                    <h1 className="YourBrand_Content_Header">Your Brand Awareness Maters</h1>
                    <p className="YourBrand_Content_Info">Budss is a husle free solution to put your brand on any digital surface including Instagram, Facebook, Twitter and TikTok</p>
                </div> 
                <div className="YourBrand_Content_icons">
                    <div className='TwoIcons'>
                        <img src={Facebook} alt="" />
                        <div className="Content_icon">
                            <img src={Instagram} alt="" />
                        </div>
                    </div>
                    <div className='TwoIcons' style={{marginLeft: "auto"}}>
                        <div className="Content_icon">
                            <img src={Twitter} alt="" />
                        </div>
                        <div className="Content_icon">
                            <img src={TikTok} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="YourBrand_Companies">
                <div className='Company'>
                    <img src={Woo} alt="" className='Companies_icon'/>
                </div>
                <div className='Company'>
                    <img src={Shopify} alt="" className='Companies_icon'/>
                </div>
                <div className='Company'>
                    <img src={Square} alt="" className='Companies_icon'/>
                </div>
                <div className='Company'>
                    <img src={Squarespace} alt="" className='Companies_icon'/>
                </div>
                <div className='Company'>
                    <img src={Clover} alt="" className='Companies_icon'/>
                </div>
            </div>
        </div>
    );
};

export default YourBrand;