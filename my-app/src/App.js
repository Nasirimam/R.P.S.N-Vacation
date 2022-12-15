

import './App.css';
import HomePage from './Home_Page/Main_Page';


import "./App.css";
import "./App.css";
import { Navbar } from "./Navbar/Navbar";
import { useEffect, useState } from "react";
import HamburgerMenu from "./Navbar/HamburgerMenu";
import Homepage from "./Navbar/Home";




function App() {
  const [ham, setHam] = useState(false);
  const changeNav = () => {
    if (window.innerWidth < 500) {
      setHam(true);
    } else {
      setHam(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize",changeNav)
  }, []);
  return (
    <div className="App">


    <Signup/>
    <Login/>

      {ham ? <HamburgerMenu /> : <Navbar />}
      < Homepage/>

    </div>
  );
}

export default App;
