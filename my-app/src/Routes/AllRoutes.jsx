import { Routes, Route } from "react-router-dom";
import Beach from "../beaches/Beach";
import Homepage from "../Navbar/Home";
import Product from "../Packages/product";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/packages" element={<Product />} />
      <Route path="/inspiration/beach" element={<Beach />} />
    </Routes>
  );
};

export { AllRoutes };
