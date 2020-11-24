import axios from 'axios';

class LocationModel{
    static getByLatLng(lat,lng){
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyAfSq-RTIlRibfDmiBPkJNY5gb4owcUcEY`)
    }
}

export default LocationModel;