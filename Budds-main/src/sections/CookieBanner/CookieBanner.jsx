import React from 'react';
import { useState } from 'react';
import posthog from 'posthog-js' 
import "./CookieBanner.css";
import close from "./close.svg"
const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true); 
  
  const acceptCookies = () => { 
    posthog.opt_in_capturing();
    setShowBanner(false); 
  };

  const declineCookies = () => {
    posthog.opt_out_capturing();
    setShowBanner(false); 
  };
    return (
      <div>
      {showBanner && ( 
        <div className="CookieBanner">
          <div className='cookieContent'>
            <p className='cookieText'> 
            This website uses cookies to ensure you get the best experience on our website. They also allow us to analyze 
            user behavior in order to constantly improve the website for you.
            </p>
            <div className="cookieButtons">
              <button className="cookieButton cookieButton_accept" onClick={acceptCookies}>
                Accept
              </button>
              <button className="cookieButton cookieButton_decline" onClick={declineCookies}>
                Decline
              </button>
            </div>
              <button className="cookiebutton_close" onClick={declineCookies}>
                <img src={close} alt="" />
              </button>
          </div>
        </div>
      )}
    </div>)
};

export default CookieBanner;