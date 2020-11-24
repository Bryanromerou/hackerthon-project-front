import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '50%'
};

export class MapContainer extends Component {
  clickHandler = (props)=>{
    console.log(props)
  }

  render() {
    return (
      <Map
        onClick={this.clickHandler} 
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB1wX15AO-cbX5lbmu-S1XdFItXxCEUmd8'
})(MapContainer);