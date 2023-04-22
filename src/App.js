import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Switch is being replaced by Routes in the latest React version



function App() {
  return (
  <div className="App">
    <Router>
    <Navbar />
      <Routes>
        {/* <Route path="/" exact component={Home} /> */}
        {/* Route now takes an element property instead of component.  */}
        <Route path='/' exact element={<Home /> } />
        <Route path='/menu' exact element={<Menu /> } />
        <Route path='/about' exact element={<About /> } />
        <Route path='/contact' exact element={<Contact />} />



      </Routes>
      <Footer />
    </Router>

  </div>
  );
}

export default App;
