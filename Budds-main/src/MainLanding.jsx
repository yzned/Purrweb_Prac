import React from 'react';
import Everyone from './sections/Everyone/Everyone';
import Header from './sections/Header/Header';
import About from './sections/About/About';
import HowWorks from './sections/HowWorks/HowWorks';
import Percents from './sections/Percents/Percents';
import WhyBudds from './sections/WhyBudds/WhyBudds';
import YourBrand from './sections/YourBrand/YourBrand';
import Footer from './sections/Footer/Footer';
import CookieBanner from './sections/CookieBanner/CookieBanner';
import posthog from 'posthog-js';
const MainLanding = () => {
    return (
        <div>
        {posthog.has_opted_out_capturing()
        ||posthog.has_opted_in_capturing() 
            ? null 
            : <CookieBanner /> 
        }
        <Header/>
        <Everyone/>
        <About/>
        <HowWorks/>
        <Percents/>
        <WhyBudds/>
        <YourBrand/>
        <Footer/>
        </div>
    );
};

export default MainLanding;