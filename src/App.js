// scrollable
// import FullPageScroll from "./pages/Recommends";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Recommend from "./pages/Recommends";
import Discount from "./pages/Discounts";


// Dropdown Items
import Wifi from "./pages/Wifi";
import Toilet from "./pages/Toilets";
import Museum from "./pages/Museum";
import Park from "./pages/Park";



import "mapbox-gl/dist/mapbox-gl.css";

// import sound from "../public/bump.mp3"
// import ReactAudioPlayer from "react-audio-player";
// add audio loop

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Switch is being replaced by Routes in the latest React version

// import Dino from "./pages/Recommends";









function App() {
  return (
    <div className="App" style={{ backgroundColor: "#fff200" }}>
      {/* <audio id="audio" loop autoplay> 
  <source src="../public/bump.mp3" type="audio/mp3">
</audio> */}

      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" exact component={Home} /> */}
          {/* Route now takes an element property instead of component.  */}
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/home" exact element={<Maps />} /> */}
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/recommends" exact element={<Recommend />} />


          {/* dropdown items */}
          <Route path="/toilets" exact element={<Toilet />} />
          <Route path="/wifi" exact element={<Wifi />} />
          <Route path="/museum" exact element={<Museum />} />
          <Route path="/park" exact element={<Park />} />
          <Route path="/discounts" exact element={<Discount/>} />


        </Routes>


        <Footer />
      </Router>
    </div>
  );
}

export default App;
