import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Toilet from "./pages/Toilets/Toilets";

// import sound from "../public/bump.mp3"
// import ReactAudioPlayer from "react-audio-player";
// add audio loop

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Switch is being replaced by Routes in the latest React version

function App() {
  return (
    <div className="App">
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
          <Route path="/toilets" exact element={<Toilet />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
