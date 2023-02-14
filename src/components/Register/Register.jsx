import React from "react";
import LoginLeft from "../Login/LoginLeft";
import RegisterForm from "./RegisterForm";
// import { RegisterContainer } from "./style";
import { LoginContainer } from "../Login/styles";
function Register() {
  return (
    <LoginContainer>
      <LoginLeft />
      <RegisterForm />
    </LoginContainer>
  );
}

export default Register;
