import { Routes, Route } from "react-router-dom";
import Admin from "../AdminPanal/admin";
import Beach from "../beaches/Beach";
import Homepage from "../Navbar/Home";
import Product from "../Packages/product";
import SinglePage from "../Packages/singlepage";
import PrivateRoute from "../Components/PrivateRoute";
import { Center, Heading } from "@chakra-ui/react";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/packages" element={<Product />} />
      <Route path="/inspiration/beach" element={<Beach />} />
      <Route path="/packages/:id" element={<SinglePage />} />
      <Route path="/admin" element={<Admin />} />
      <Route
        path="*"
        element={
          <Center>
            <Heading>Page Does Not Exist</Heading>
          </Center>
        }
      />
    </Routes>
  );
};

export { AllRoutes };
