import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePageHandymen from "./pages/HomePageHandymen/HomePageHandymen";
import MenuPage from "./pages/MenuPage/MenuPage";
import SignUp from "./pages/SignUpPage/SignUpPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VerificationPage from "./pages/VerificationPage/VerificationPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import ProfileAllSetPage from "./pages/ProfileAllSetPage/ProfileAllSetPage";
/* THIS PAGE IS ONLY MADE FOR 375PX NOTHING LARGER OR SMALLER */
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
      <Route path="/menu/signup/as-craftsmen/signin" element={<SignInPage />} />
      <Route
        path="/menu/signup/as-craftsmen/reset-password"
        element={<ResetPasswordPage />}
      />
      <Route
        path="/menu/signup/as-craftsmen/all-set"
        element={<ProfileAllSetPage />}
      />
    </Routes>
  );
};

export default App;
