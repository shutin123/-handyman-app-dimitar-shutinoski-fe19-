import React from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase-config";
import ButtonSignUp from "../../../buttons/ButtonSignUp/ButtonSignUp";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  telephone: string;
}

interface RegisterSignUpProps {
  formData: FormData;
}

const RegisterSignUp: React.FC<RegisterSignUpProps> = ({ formData }) => {
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      console.log("User created:", userCredential.user);

      sessionStorage.setItem("userPhoneNumber", formData.telephone);

      navigate("/menu/signup/as-craftsmen/register/verification");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error during sign up:", error.message);
        alert(`Signup failed: ${error.message}`);
      } else {
        console.error("Unknown error during sign up:", error);
        alert("Signup failed due to an unknown error.");
      }
    }
  };

  return (
    <div className="register-signup-container">
      <ButtonSignUp label={"Register"} onClick={handleSignUp} />
    </div>
  );
};

export default RegisterSignUp;
