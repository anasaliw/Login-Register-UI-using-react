import React from "react";
import "../../App.css";
import {
  Box,
  Typography,
  FormGroup,
  FormControl,
  Checkbox,
  Divider,
} from "@mui/material";
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
} from "./styles";
import { Link } from "react-router-dom";

function LoginRight() {
  const values = {
    username: "",
    password: "",
  };
  const [signInValues, setSignInValues] = React.useState(values);

  const handleChange = (e) => {
    setSignInValues({ ...signInValues, [e.target.name]: e.target.values });
  };
  return (
    <>
      <RightContainer>
        <Box style={{ padding: "10px 80px" }}>
          <LoginText>Login</LoginText>
          <WelcomeText>Welcome back, please login to your account.</WelcomeText>
          <FormGroup>
            <FormControl>
              <Username>Username:</Username>
              <TextInputField
                name='username'
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
            <FormControl>
              <Username>Password:</Username>
              <TextInputField
                name='password'
                onChange={(e) => handleChange(e)}
                type='password'
              />
            </FormControl>
          </FormGroup>
          <RememberMeBox>
            <Box
              style={{
                display: "flex",
              }}
            >
              <Checkbox />
              <RememberMeText>Remember Me</RememberMeText>
            </Box>

            <ForgetPasswordText>Forget Password?</ForgetPasswordText>
          </RememberMeBox>
          <Btn>Login</Btn>
          {/* // !DoNotHaveAccount */}
          <DoNotHaveAccBox>
            <DoNotHaveAccText>Don’t you have an account?</DoNotHaveAccText>{" "}
            &nbsp;
            <Link to='/register'>
              <DoNotHaveAccText2>Create an account</DoNotHaveAccText2>
            </Link>
          </DoNotHaveAccBox>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Divider />
            <Typography
              style={{
                fontSize: 14,
                color: "#2d3436",
                // margin: "10px 0px"
              }}
            >
              Or
            </Typography>
            <Divider />
          </Box>
          <Divider />

          {/* // ! Buttons */}
          <ContinueWithBtn variant='outlined'>
            <img
              style={{ height: 15, width: 15 }}
              src='assets/images/google.webp'
              alt='google'
              srcset=''
            />
            &nbsp;
            <Typography variant='span'>Continue with Google Account</Typography>
          </ContinueWithBtn>
          <ContinueWithBtn variant='outlined'>
            <img
              style={{ height: 15, width: 15 }}
              src='assets/images/facebook.png'
              alt='google'
              srcset=''
            />
            &nbsp;
            <Typography variant='span'>
              Continue with Facebook Account
            </Typography>
          </ContinueWithBtn>
          <TermBox>
            <TermBoxText>Privacy Policy</TermBoxText>
            &nbsp;
            <TermBoxDot>· </TermBoxDot>
            &nbsp;&nbsp;
            <TermBoxText> Terms of use</TermBoxText>
          </TermBox>
        </Box>
      </RightContainer>
      ;
    </>
  );
}

export default LoginRight;
