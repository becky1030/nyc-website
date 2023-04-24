import React from 'react';
import "./Toilets.css";
import Map from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYmVja3l5eXl5IiwiYSI6ImNsZWV2azM0bTBiN2k0NG12cnEybml0am0ifQ.pTk0bhJgKynBeJMf1r8N3A'; // Set your mapbox token here


function Toilets() {

  return (
    <div className="toilet" style={{backgroundColor: '#fff200'}}>
      
   
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}

    />

</div>
  );
}


export default Toilets


