import React from "react";
import Map, {Source, Layer, Marker} from 'react-map-gl';
import nycWifi from "../assets/wifi.json";

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYmVja3l5eXl5IiwiYSI6ImNsZWV2azM0bTBiN2k0NG12cnEybml0am0ifQ.pTk0bhJgKynBeJMf1r8N3A'; // Set your mapbox token here



const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf'
  }
};



function Toilet() {
  const [viewport, setViewport] = React.useState();
  return (
    <Map 


 mapboxAccessToken="pk.eyJ1IjoiYmVja3l5eXl5IiwiYSI6ImNsZWV2azM0bTBiN2k0NG12cnEybml0am0ifQ.pTk0bhJgKynBeJMf1r8N3A"

    style={{

                    width:"90%",
                    height: "60%",
                    borderRadius:"15px",
                    border: '2px solid red',
                    top: "200px",
                    bottom: "0",
                    
                      
              }}
    
    
    initialViewState={{


      longitude: -73.98451127670837,
      latitude: 40.7554292155312,
      zoom: 15,
      pitch: 60
    }}
            mapStyle="mapbox://styles/mapbox/streets-v12"

    >
      <Source id="my-data" type="geojson" data={nycWifi}>
        <Layer {...layerStyle} />
      </Source>

      <Marker>
      longitude={longitude}
      latitude={latitude}
      <img src="../assets/pepe.png" />
</Marker>

    </Map>
  );
}

export default Toilet;







// import React from 'react';
// import Map, {Marker, Source, Layer} from "react-map-gl";
// import "../styles/Toilets.css";
// import nycWifi from "../assets/wifi.json";

// const MAPBOX_TOKEN = 'pk.eyJ1IjoiYmVja3l5eXl5IiwiYSI6ImNsZWV2azM0bTBiN2k0NG12cnEybml0am0ifQ.pTk0bhJgKynBeJMf1r8N3A'; // Set your mapbox token here

// const layerStyle = {
//   id: 'point',
//   type: 'circle',
//   paint: {
//     'circle-radius': 10,
//     'circle-color': '#007cbf'
//   }
// };




// function App(){

//   return (
//       <div className="App">
//         <Map
//         mapboxAccessToken="pk.eyJ1IjoiYmVja3l5eXl5IiwiYSI6ImNsZWV2azM0bTBiN2k0NG12cnEybml0am0ifQ.pTk0bhJgKynBeJMf1r8N3A"
//         style={{

//               width:"90%",
//               height: "60%",
//               borderRadius:"15px",
//               border: '2px solid red',
//               top: "200px",
//               bottom: "0",
              
                
//         }}
//         initialViewState={{
//                   longitude: -73.98451127670837,
//                   latitude: 40.7554292155312,
//                   projection: 'globe',
//                   zoom: 15,
//                   pitch: 60
//                 }}
//         mapStyle="mapbox://styles/mapbox/streets-v12"
//         >

// <Source id="my-data" type="json" data={nycWifi}>
//         <Layer {...layerStyle} />
//       </Source>

// <Marker 
// longitude={-73.98451127670837}
// latitude={40.7554292155312}
        
// />


// </Map>
// </div>
// );
// }

// export default App




