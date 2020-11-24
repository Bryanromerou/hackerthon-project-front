import React, {useEffect, useState} from 'react';
import CovidModel from '../models/covid';

const LocalUpdates = () => {
    const [covidData, setcovidData] = useState({});

    useEffect(()=>{
        CovidModel.byState("ca").then((response)=>{
            console.log(response.data)
            setcovidData(response.data)
        });
    },[]);
    return (
        <div>
            <header className= "localupdates-header">
                <div className= "mt-5 ah">
                    <p>los Angeles</p>
                    <h1>Local Updates In Your Area</h1>
                </div>

                <div className = "searchbaar">
                    Search Bar
                </div>
            </header>

            {/* CARDS Section */}
            <div className = "localupdates-cards">

                {/* COVID CARD */}
                <div className= "card-holder">

                    <div className = "cards-header">
                        <h2>
                            Covid-19
                        </h2>
                        <p>--></p>
                    </div>

                    <div className = "covid-chart">
                    <iframe src="https://covid19chart.org/#/?start=%3E%3D50&include=CA&top=0&domain=Intl&theme=dark&bare=1" width="500" height="300"></iframe>
                    </div>

                    <div className = "cards-footer">
                        <div className = "card-footer-section">
                            <p>Total Cases</p>
                            <h3>{covidData.positive}</h3>
                            <p>+{covidData.positiveIncrease}</p>
                        </div>
                        <div className = "card-footer-section">
                            <p>Recovered</p>
                            <h3>--------</h3>
                        </div>
                        <div className = "card-footer-section">
                            <p>Deaths</p>
                            <h3>{covidData.death}</h3>
                            <p>+{covidData.deathIncrease}</p>
                        </div>
                    </div>

                </div>

                {/* WILDFIRE CARD */}
                <div className= "card-holder">

                    <div className = "cards-header">
                        <h2>
                            Wildfires
                        </h2>
                        <p>--></p>
                    </div>

                    <div className = "covid-chart">
                        <img src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/4B8WGzzN7mVRLSBRnIydFOh-fr0=/1440x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/I47NLEYRZNAARPCV5IQ4CTZRJU.png" alt="Earthquake Map" className = "wildfire-map"/>
                    </div>

                    <div className = "cards-footer">
                        <div className = "card-footer-section">
                            <p>Total Acres</p>
                            <h3>132</h3>
                            <p>+3</p>
                        </div>
                        <div className = "card-footer-section">
                            <p>Containment</p>
                            <h3>89%</h3>
                        </div>
                        <div className = "card-footer-section">
                            <p>Local AQI</p>
                            <h3>101</h3>
                        </div>
                    </div>

                </div>

                {/* Earthquake CARD */}
                <div className= "card-holder">

                    <div className = "cards-header">
                        <h2>
                            Earthquakes
                        </h2>
                        <p>--></p>
                    </div>

                    <div className = "covid-chart">
                        <img src="https://mediad.publicbroadcasting.net/p/shared/npr/201912/787532580.png" alt="Earthquake Map" className = "earthquake-map"/>
                    </div>
{/* https://bostonglobe-prod.cdn.arcpublishing.com/resizer/4B8WGzzN7mVRLSBRnIydFOh-fr0=/1440x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/I47NLEYRZNAARPCV5IQ4CTZRJU.png */}

                    <div className = "cards-footer">
                        <div className = "card-footer-section">
                            <p>Arvin, CA (103mi away)</p>
                            <h3>
                            <strong>
                                M 3.1
                            </strong>
                            </h3>
                        </div>
                    </div>

                </div>
            </div>
            
            <h2 className = "saved-updates-h2">Saved Updates</h2>
            <div className = "saved-updates">
                <div className = "saved-update">
                    Update 1
                </div>
                <div className = "saved-update">
                    Update 1
                </div>
                <div className = "saved-update">
                    Update 1
                </div>
            </div>

            <div className = "localupdates-content">
                <div className = "localupdates-content-left">
                    <h3>
                        Discussion Feed
                    </h3>
                    <p>Let your neighbors know what’s happening, and see what they have to say.</p>
                    <div className = "card">

                    </div>
                </div>
                <div className = "localupdates-content-right">
                    <h3>
                        Top News Stories in Los Angeles
                    </h3>
                    <h5>Important Headline That Takes Up One Line on Desktop...</h5>
                </div>
            </div>
        </div>
    );
}

export default LocalUpdates;
