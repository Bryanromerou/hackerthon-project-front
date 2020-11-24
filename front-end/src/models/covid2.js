import axios from 'axios';

// Docs : https://covid19.cloudeya.org/token

let config = {
    method: 'get',
    url: 'https://covid19.cloudeya.org/nov2020',
    headers: { 
      'Content-Type': 'application/json',
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RhcGkxIiwiaWF0IjoxNjA2MTk5NTI1LCJleHAiOjE2MDYzOTk1MjV9.Nmcrme6rwx5ELDbow8eVdN5rMHET9eG9JfcAQvYVzLc"
    }
};

class CovidModel2{
    // Will get the Daily Info for United States
    static getData(){
        return axios(config)
    }
}

export default CovidModel2;