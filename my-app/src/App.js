import "./App.css";
import "./App.css";
import { Navbar } from "./Navbar/Navbar";
import { useEffect, useState } from "react";
import HamburgerMenu from "./Navbar/HamburgerMenu";
import Homepage from "./Navbar/Home";
import Footer from "./Footer/Footer";


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
      {ham ? <HamburgerMenu /> : <Navbar />}
      < Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
