import "./App.css";
// import HomePage from './Home_Page/Main_Page';
import Signup from "./Components/Signup";
import Login from "./Components/Login";

import "./App.css";
import { Navbar } from "./Navbar/Navbar";
import { useEffect, useState } from "react";
import HamburgerMenu from "./Navbar/HamburgerMenu";
import Homepage from "./Navbar/Home";
import Footer from "./Footer/Footer";
import Beach from "./beaches/Beach";
// import HomePage from './HomePage/Main_Page';
import Product from "./Packages/product";
import { AllRoutes } from "./Routes/AllRoutes";

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
    window.addEventListener("resize", changeNav);
  }, []);
  return (
    <div className="App">
      {ham ? <HamburgerMenu /> : <Navbar />}

      {/* <Homepage /> */}
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
