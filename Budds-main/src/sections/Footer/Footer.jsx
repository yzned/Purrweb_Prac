import React from "react"
import "./Footer.css"
import logoBudss from "./logoBudss.svg"
import appstore from "./appstore.svg"
import googleplay from "./googleplay.svg"
import {useState,useEffect} from 'react';
import MyButton from "../../UI/MyButton/MyButton";
const Footer = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResizeWindow = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResizeWindow);
      return () => {
        window.removeEventListener("resize", handleResizeWindow);
      };
      }, []);
    return (
        <footer className='footer'>
            <div className="footer_main_content">
                <div className="main_content_logo">
                    <img src={logoBudss} alt="" />
                </div>
                <div className="main_content_links">
                    <button className="footer_main_content_link" >For Busines</button>
                    <button className="footer_main_content_link" >For Customers</button>
                    {width < 800 &&
                        <div className="main_content_links">
                            <button className="footer_main_content_link">Privacy Policy</button>
                            <button className="footer_main_content_link">Term Of Use - Seller</button>
                            <button className="footer_main_content_link">Term Of Use - Sellers and Customers</button>
                        </div>
                    }
                </div>
                <MyButton style={{width: 194}}>Contact Sales</MyButton>
                <div className="main_content_stores">
                    <div className='main_content_stores_image'>
                        <a href=""><img src={appstore} alt=""  className='main_content_stores_image'/></a>    
                    </div>
                    <div className='main_content_stores_image'>
                        <a href=""><img src={googleplay} alt="" className='main_content_stores_image'/></a>                     
                    </div>
                </div>
            </div>
            <div className="footer_Copyright">
                <p>
                    © Copyright 2023, All Rights Reserved by Budss
                </p>
                {width > 800 &&
                    <div>
                        <a href="" className="Copyright_link">Privacy Policy</a>
                        <a href="" className="Copyright_link">Term Of Use - Seller</a>
                        <a href="" className="Copyright_link">Term Of Use - Sellers and Customers</a>
                    </div>
                }
            </div>
        </footer>
    );
};
export default Footer;