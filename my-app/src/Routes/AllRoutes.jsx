import { Routes, Route } from "react-router-dom";
import Beach from "../beaches/Beach";
import Homepage from "../Navbar/Home";
import Product from "../Packages/product";
import SinglePage from "../Packages/singlepage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/packages" element={<Product />} />
      <Route path="/inspiration/beach" element={<Beach />} />
      <Route path="/packages/:id" element={<SinglePage />} />
    </Routes>
  );
};

export { AllRoutes };
