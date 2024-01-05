import React from 'react';
import './Percents.css'
const Percents = () => {
    return (
        <div className='Percents'>  
                <div className='Percents_Content' style={{marginTop:"0"}}>
                    <h1 className='Percent_Head'>15%</h1>
                    <span className='Percent_Info'>Increase in Purchase Amount</span>
                </div>
                <div className='Percents_Content'>
                    <h1 className='Percent_Head'>30%</h1>
                    <span className='Percent_Info' >Growth in Annual Sales</span>
                </div>
                <div className='Percents_Content'>
                    <h1 className='Percent_Head'>10%</h1>
                    <span className='Percent_Info'>Growth in New Customers</span>
                </div>
      
        </div>
    );
};

export default Percents;