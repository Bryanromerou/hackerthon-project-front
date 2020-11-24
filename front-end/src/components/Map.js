import React, { useState, useEffect} from 'react';
import {REACT_APP_GOOGLE_MAPS_API_KEY} from '../config/key'
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import LocationModel from '../models/locations';
import CovidModel from '../models/covid';
import mapStyles from "../styles/mapStyles";
// All Required Imports

// Wet code for all the states
const allstates = [ "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", ]


// Map Settings
const libraries = ["places"];
const mapContainerStyle = {
  height: "70vh",
  width: "100%",
};
const center = {
  lat: 34.007135,
  lng: -118.130739,
};
const options = {
  styles: mapStyles,
  zoomControl: true,
};
let temp = "";

//!!!!!!!!!!!!!!!Map COMPONENT!!!!!!!!!!!!
export default function Map (){
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  //  Hooks
  const [cities, setCities] = useState([]);
  const [hotspots, setHotspots] = useState([]);
  
  
  useEffect(()=>{
    console.log("Cities State has been modified!")
  },[cities])

  //"Component did mount"
  useEffect(()=>{
    const myArr = []
    allstates.forEach((state)=>{
      CovidModel.byState(state).then((response)=>{
        myArr.push(response.data)
      });

    })
    setHotspots(myArr);
  },[]);

  // Map click handler
  const mapClickHandler = React.useCallback((e) => {
    LocationModel.getByLatLng(e.latLng.lat(),e.latLng.lng()).then((response)=>{

      // Will Look through the components of an address and console log the city name that was clicked on.
      response.data.results[0].address_components.forEach((elem)=>{
        if(elem.types.includes("locality")){
          setCities((current) => [
            ...current,
            elem.short_name,
          ]);
          console.log(elem.short_name)
        }
      });
    })
  }, []);


  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(8);
  }, []);


  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  return(
    <div>
      <GoogleMap 
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick = {mapClickHandler}
        onLoad={onMapLoad}
      >
        <Search panTo={panTo} />
        <Locate panTo={panTo} />
      </GoogleMap>
    </div>
  );
}


//!!!!!!!!!!!!!!!Locate COMPONENT!!!!!!!!!!!!
function Locate({ panTo }) {
  return (
    <button
    className="locate"
    onClick={() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          panTo({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => null
        );
      }}
      >
      <img src="/compass.svg" alt="compass" />
    </button>
  );
}

//!!!!!!!!!!!!!!!Search COMPONENT!!!!!!!!!!!!
function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
    } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
          className = "inputLocation"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}