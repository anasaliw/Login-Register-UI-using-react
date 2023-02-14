import React from "react";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";
// import logo from "./assets/logo.svg";
import { LoginContainer } from "./styles";

function Login() {
  return (
    <LoginContainer>
      <LoginLeft />
      <LoginRight />
    </LoginContainer>
  );
}

export default Login;
