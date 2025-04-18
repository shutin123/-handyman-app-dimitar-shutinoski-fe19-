import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePageHandymen from "./pages/HomePageHandymen/HomePageHandymen";
import MenuPage from "./pages/MenuPage/MenuPage";
import SignUp from "./pages/SignUpPage/SignUpPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VerificationPage from "./pages/VerificationPage/VerificationPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePageHandymen />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/menu/signup/as-craftsmen" element={<SignUp />} />
      <Route
        path="/menu/signup/as-craftsmen/register"
        element={<RegisterPage />}
      />
      <Route
        path="/menu/signup/as-craftsmen/register/verification"
        element={<VerificationPage />}
      />
    </Routes>
  );
};

export default App;
