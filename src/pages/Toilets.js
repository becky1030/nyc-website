// import React, { useEffect } from "react";
// import Map, { Source, Layer, Marker } from "react-map-gl";
// import Mapbox from "react-map-gl/dist/esm/mapbox/mapbox";
// import nycWifi from "../assets/wifi.json";
// import { Icon } from '@iconify/react';

// const MAPBOX_TOKEN =
//   "pk.eyJ1IjoiYmVja3l5eXl5IiwiYSI6ImNsZWV2azM0bTBiN2k0NG12cnEybml0am0ifQ.pTk0bhJgKynBeJMf1r8N3A"; // Set your mapbox token here

// const layerStyle = {
//   id: "point",
//   type: "symbol",
//   source: "Marker",
//   layout: {
//     "icon-image": "pin",
//     "icon-size": 0.5
//   },
//   paint: {
//     "icon-color": "green",
//     // "circle-radius": 10,
//     // "circle-color": "#007cbf",
//   },
// };

// function Toilet() {

//   const [viewport, setViewport] = React.useState();
//   return (
//     <Map
//       mapboxAccessToken="pk.eyJ1IjoiYmVja3l5eXl5IiwiYSI6ImNsZWV2azM0bTBiN2k0NG12cnEybml0am0ifQ.pTk0bhJgKynBeJMf1r8N3A"

//       onStyleLoad={(map) => {
//         map.loadImage('https://docs.mapbox.com/mapbox-gl-js/assets/cat.png')
//       }}

//       style={{
//         width: "90%",
//         height: "60%",
//         borderRadius: "15px",
//         border: "2px solid red",
//         top: "200px",
//         bottom: "0",
//       }}
//       initialViewState={{
//         longitude: -73.98451127670837,
//         latitude: 40.7554292155312,
//         zoom: 15,
//         pitch: 60,
//       }}
//       mapStyle="mapbox://styles/mapbox/streets-v12"
//     >
//       <Source id="my-data" type="geojson" data={nycWifi}>
//         <Layer {...layerStyle} />

//       </Source>

//       <Marker
//        longitude={-73.98451127670837}
//        latitude={40.7554292155312}
//       >
//         <Icon icon="material-symbols:wifi" width={30} height={30} color="blue"/>
//       </Marker>

//     </Map>
//   );
// }

// export default Toilet;

import React, { useEffect, useRef } from "react";
import "../styles/Toilets.css";
import Map, { Layer, Source } from "react-map-gl";
import WifiJson from "../assets/wifi.json";
import PepeIcon from "../assets/pepe.png";
// import { Icon } from '@iconify/react';

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYmVja3l5eXl5IiwiYSI6ImNsZWV2azM0bTBiN2k0NG12cnEybml0am0ifQ.pTk0bhJgKynBeJMf1r8N3A"; // Set your mapbox token here

const layerStyle = {
  id: "point",
  type: "circle",
  paint: {
    "circle-radius": 2,
    "circle-color": "#007cbf",
  },
};

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
        <Source type="geojson" data={WifiJson}>
          <Layer
            type="symbol"
            layout={{
              "icon-image": "pepe-icon",
              "icon-size": 0.2,
              "text-field": ["get", "id"],
            }}
          />
        </Source>

        {/* Or add icon here */}
        {/* <Marker longitude={-73.98451127670837} latitude={40.7554292155312}>
          <Icon
            icon="material-symbols:wifi"
            width={30}
            height={30}
            color="blue"
          />
        </Marker> */}
      </Map>
    </div>
  );
}

export default Toilets;
