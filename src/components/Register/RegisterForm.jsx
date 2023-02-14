import { Box, FormGroup, FormControl, Typography } from "@mui/material";
import React from "react";
import {
  RightContainer,
  LoginText,
  WelcomeText,
  Username,
  RememberMeBox,
  RememberMeText,
  TextInputField,
  ForgetPasswordText,
  Btn,
  DoNotHaveAccBox,
  DoNotHaveAccText,
  DoNotHaveAccText2,
  ContinueWithBtn,
  TermBox,
  TermBoxDot,
  TermBoxText,
} from "../Login/styles";
import { Link } from "react-router-dom";

function RegisterForm() {
  const values = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [signInValues, setSignInValues] = React.useState(values);

  const handleChange = (e) => {
    setSignInValues({ ...signInValues, [e.target.name]: e.target.values });
  };
  return (
    <Box style={{ width: "100%" }}>
      <Box style={{ padding: "10px 80px" }}>
        <LoginText>Create Account</LoginText>
        <WelcomeText>
          Please sign up to your personal account if you want to use all our
          premium products.
        </WelcomeText>
        <FormGroup>
          <FormControl>
            <Username>Username:</Username>
            <TextInputField name='username' onChange={(e) => handleChange(e)} />
          </FormControl>
          <FormControl>
            <Username>Email:</Username>
            <TextInputField
              name='email'
              onChange={(e) => handleChange(e)}
              type='email'
            />
          </FormControl>
          <FormControl>
            <Username>Password:</Username>
            <TextInputField
              name='password'
              type='password'
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <FormControl>
            <Username>Confirm Password:</Username>
            <TextInputField
              name='confirmPassword'
              onChange={(e) => handleChange(e)}
              type='password'
            />
          </FormControl>
        </FormGroup>
        {/* //! Remember Box */}

        <Btn>Sign up</Btn>
        {/* // !DoNotHaveAccount */}
        <DoNotHaveAccBox>
          <DoNotHaveAccText>Already have an account?</DoNotHaveAccText> &nbsp;
          <Link to='/'>
            <DoNotHaveAccText2>Login</DoNotHaveAccText2>
          </Link>
        </DoNotHaveAccBox>

        <TermBox>
          <TermBoxText>Privacy Policy</TermBoxText>
          &nbsp;
          <TermBoxDot>· </TermBoxDot>
          &nbsp;&nbsp;
          <TermBoxText> Terms of use</TermBoxText>
        </TermBox>
      </Box>
    </Box>
  );
}

export default RegisterForm;
