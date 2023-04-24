import React from 'react';

// import "mapbox-gl/dist/mapbox-gl-css";
import Map, {Marker} from "react-map-gl";
import "../styles/Toilets.css";
import { useState } from "react";

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYmVja3l5eXl5IiwiYSI6ImNsZWV2azM0bTBiN2k0NG12cnEybml0am0ifQ.pTk0bhJgKynBeJMf1r8N3A'; // Set your mapbox token here


function App(){
  // const [lng, setLng] = useState(-73.98451127670837);
  // const [lat, setLat] = useState(40.7554292155312);

 


  return (
      <div className="App">
        <Map
        mapboxAccessToken="pk.eyJ1IjoiYmVja3l5eXl5IiwiYSI6ImNsZWV2azM0bTBiN2k0NG12cnEybml0am0ifQ.pTk0bhJgKynBeJMf1r8N3A"
        style={{

              width:"90%",
              height: "60%",
              borderRadius:"15px",
              border: '2px solid red',
              top: "200px",
              bottom: "0",
              // backgroundColor: '#fff200'
              // marginLeft: "80px",
              // marginTop: "200px"
                
        }}
        initialViewState={{
                  longitude: -73.98451127670837,
                  latitude: 40.7554292155312,
                  projection: 'globe',
                  zoom: 15,
                  pitch: 60
                }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        >
<Marker 
longitude={-73.98451127670837}
latitude={40.7554292155312}
        
/>


</Map>
</div>
);
}

export default App


// function Toilets() {

//   return (
//     <div className="toilet" style={{backgroundColor: '#fff200'}}>
      
   
//     <Map
//       initialViewState={{
//         longitude: -122.4,
//         latitude: 37.8,
//         zoom: 14
//       }}
//       style={{width: 600, height: 400}}
//       mapStyle="mapbox://styles/mapbox/streets-v12"
//       mapboxAccessToken={MAPBOX_TOKEN}
//       >

         {/* <Source id="my-data" type="geojson" data={'./assets/wifi.geojson'}>
        <Layer {...layerStyle} /> 
      </Source>

      <Marker longitude={40.7554292155312} latitude={-73.98451127670837} color="red" /> */}
    

//       </Map>
    
// </div>
//   );
// }


// export default Toilets


// const Toilet = () => {
//   const mapContainerRef = useRef(null);

//   const [lng, setLng] = useState(5);
//   const [lat, setLat] = useState(34);
//   const [zoom, setZoom] = useState(1.5);

//   // Initialize map when component mounts
//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [lng, lat],
//       zoom: zoom
//     });

//     // Add navigation control (the +/- zoom buttons)
//     map.addControl(new mapboxgl.NavigationControl(), 'top-right');

//     map.on('move', () => {
//       setLng(map.getCenter().lng.toFixed(4));
//       setLat(map.getCenter().lat.toFixed(4));
//       setZoom(map.getZoom().toFixed(2));
//     });

//     // Clean up on unmount
//     return () => map.remove();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <div>
//       <div className='sidebarStyle'>
//         <div>
//           Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//         </div>
//       </div>
//       <div className='map-container' ref={mapContainerRef} />
//     </div>
//   );
// };

// export default Toilet;