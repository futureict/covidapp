import React, { useEffect, useState } from "react";
import "./covid.css"
import "./myapp.jpg"

const Covid = () => {
   
    const [cdata, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://sheet2api.com/v1/iGlpUO0T7G2N/covid-19info-for-app');
            const actualData = await res.json();
            console.log(actualData[0]);
            setData(actualData[0]);
          } catch (err) {
             console.log(err);
          }

    }
  
    useEffect(() => {
         getCovidData();
    }, []);

    return (
        <div className="program">
            <h1 className="prohead">LIVE</h1>
            <h2 className="head">COVID - 19 TRACKER - SRI LANKA</h2>
            <div className="parent">
            
                   <div className="card_main">
                        <div className="one">
                            <p className="card_name"><span> TOTAL </span> CASES</p>
                            <p className="card_total card_small">{cdata.local_total_cases}</p>
                        </div>
                   </div>
                
                   <div className="card_main">
                        <div className="two">
                            <p className="card_name"><span> TOTAL </span> RECOVERED</p>
                            <p className="card_total card_small">{cdata.local_recovered}</p>
                        </div>
                   </div>
                   <div className="card_main">
                        <div className="four">
                            <p className="card_name"><span> TOTAL </span> ACTIVE</p>
                            <p className="card_total card_small">{cdata.local_active_cases}</p>
                        </div>
                   </div>
                   <div className="card_main">
                        <div className="three">
                           <p className="card_name"><span> TOTAL </span> DEATHS</p>
                           <p className="card_total card_small">{cdata.local_deaths}</p>
                        </div>
                   </div>
               


                  
                      
                   <div className="card_main">
                        <div className="six">
                            <p className="card_name"><span> DAILY </span> NEW CASES</p>
                            <p className="card_total card_small">{cdata.local_new_cases}</p>
                        </div>
                   </div>              
                   <div className="card_main">
                        <div className="five">
                            <p className="card_name"><span> DAILY </span> DEATHS</p>
                            <p className="card_total card_small">{cdata.local_new_deaths}</p>
                        </div>
                   </div>
                   </div>

                
                   <p>Programmed by T.Aruni. Updated as at {cdata.update_date_time}</p>
                   <p>Source: hpb.health.gov.lk</p>
                   <p>Created for learning purposes. This program automatically recieve updates from official site and update values.</p>
                
            </div>
       
    )
}

export default Covid;
