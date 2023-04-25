import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Car from "../assets/car.png";
import Wheel1 from "../assets/wheel.png";
import Wheel2 from "../assets/wheel.png";
import Web1 from "../assets/guide.png";
import Web2 from "../assets/love.png";
import Web3 from "../assets/secret.png";

// import {Canvas} from "@react-three/fiber";
// import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
// wanted to load a 3d object but still trying to get it work

function Home() {
  return (
    <div className="home" style={{ backgroundColor: "#fff200" }}>
      <div className="headerContainer">
        {/* add image directly in html, import image in the import section on top */}
        {/* can not show div image here!!! */}
        {/* how to type ˋ ˋ in english */}

        {/* <div>

function Model(props){
  const { scene } = useGLTF("assets/taxi.glb");
  return <primitive object={scene} {...props}/> 
}

function App(){
  return (
    <Canvas dpr={[1,2]} shadows camera={{fov: 45 }} style={{"position": "absolute"}}>
      <color attach="background" args={["#000000"]} />
      <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
        </Stage environment={null}>
        <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}
  </div> */}

        {/* car animation referencing https://www.youtube.com/watch?v=gW0dwO2JNmE */}
        <div class="hero">
          <div class="highway"></div>
          <div class="city"></div>

          <div class="car">
            <img src={Car} />
          </div>
          <div class="wheel">
            <img src={Wheel1} class="back-wheel" />
            <img src={Wheel2} class="front-wheel" />
          </div>
        </div>

        </div>



{/* line 60=row */}

        <div class="flexbox"> 
{/* two columns added in the row */}
          <div class="col1">
            <div className="la">
              <h1>NYC Free Things</h1>
            </div>

            <div className="krungthep">
              <p>find free stuffs in NYC</p>
            </div>
            <Link to="/menu">
              <button> EXPLOR YOUR FREE TRIPS </button>
            </Link>

          </div>

{/* column 2 */}
          <div class="col2">
            <p>hello</p>
            </div>

        </div>


      {/* sticker of the nyc websites */}
      <div class="websites">
        <img src={Web1} class="first-web" />
        <img src={Web2} class="second-web" />
        <img src={Web3} class="third-web" />
      </div>
    </div>
  );
}

export default Home;
