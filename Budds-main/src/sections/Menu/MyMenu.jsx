import React, { useState } from 'react';
import "./MyMenu.css";
import MyButton from '../../UI/MyButton/MyButton';
import BigClose from "./BigClose.svg";
import { Link } from 'react-router-dom';
const MyMenu = () => 
{
    return(
            <div className="fullscreen-menu">
                <div className="fullscreen-menu-content">
                    <Link to ="/">
                        <img src={BigClose} alt="" className='close_btn'/>
                    </Link>
                    <div className="Menu">
                            <MyButton>Contact Sales</MyButton>
                            <div className="Menu_links">
                                <a href="" className="footer_main_content_link">For Busines</a>
                                <a href="" className="footer_main_content_link">For Customers</a>
                                <a href="" className="footer_main_content_link">Privacy Policy</a>
                                <a href="" className="footer_main_content_link">Terms Of Use - Seller</a>
                                <a href="" className="footer_main_content_link">Terms of Use - Sellers & Customers</a>
                            </div>
                    </div>
                </div>
            </div>
    );
            
};

export default MyMenu;    