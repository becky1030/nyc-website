import React, { useEffect, useRef } from "react";
import "../styles/Toilets.css";
import Map, { Layer, Source } from "react-map-gl";
import ToiletJson from "../assets/toilet.json";
import PepeIcon from "../assets/pepe.png";
// import { Icon } from '@iconify/react';

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYmVja3l5eXl5IiwiYSI6ImNsZWV2azM0bTBiN2k0NG12cnEybml0am0ifQ.pTk0bhJgKynBeJMf1r8N3A"; // Set your mapbox token here

// const layerStyle = {
//   id: "point",
//   type: "circle",
//   paint: {
//     "circle-radius": 2,
//     "circle-color": "#007cbf",
//   },
// };

function Toilets() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    mapRef.current.loadImage(PepeIcon, (error, image) => {
      if (error) throw error;

      // Add the loaded image to the style's sprite with the ID 'kitten'.
      mapRef.current.addImage("pepe-icon", image);
    });
  }, [mapRef]);

  return (
    <div className="toilet" style={{ backgroundColor: "#fff200" }}>
      <Map
        ref={mapRef}
        initialViewState={{
          longitude: -73.98451127670837,
          latitude: 40.7554292155312,
          zoom: 13,
          pitch: 60,
        }}
        style={{
          // width: 600,
          // height: 400
          width: "90%",
          height: "60%",
          borderRadius: "15px",
          border: "2px solid red",
          top: "100px",
          bottom: "0",
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Source type="geojson" data={ToiletJson}>
          <Layer
            type="symbol"
            layout={{
              "icon-image": "pepe-icon",
              "icon-size": 0.2,
              "text-field": ["get", "id"],
            }}
          />
        </Source>

       
      </Map>
    </div>
  );
}

export default Toilets;
