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
                        COVID CHART PLACEHOLDER
                    </div>

                    <div className = "cards-footer">
                        <div className = "card-footer-section">
                            <p>Total Cases</p>
                            <h3>371K</h3>
                            <p>+6,741</p>
                        </div>
                        <div className = "card-footer-section">
                            <p>Recovered</p>
                            <h3>------------</h3>
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
                        Wildfires CHART PLACEHOLDER
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
                        Earthquakes CHART PLACEHOLDER
                    </div>

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

                </div>
                <div className = "localupdates-content-right">

                </div>
            </div>
        </div>
    );
}

export default LocalUpdates;
