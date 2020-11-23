import axios from 'axios';

// Docs : https://covidtracking.com/data/api

class CovidModel{
    // Will get the Daily Info for United States
    static dailyUS(){
        return axios.get("https://api.covidtracking.com/v1/us/daily.json")
    }

    // Will get the Current Info for your given state
    static byState(state){
        return axios.get(`https://api.covidtracking.com/v1/states/${state}/current.json`)
    }
    
    // Date format YYYYMMDD
    static byState_Date(state,date){
        return axios.get(`https://api.covidtracking.com/v1/states/${state}/${date}.json`)
    }
}

export default CovidModel;