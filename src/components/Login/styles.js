import { Box, styled, Typography, Button, TextField } from "@mui/material";

export const LoginContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  /* height: 1000px !important; */

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const LeftContainer = styled(Box)`
  background-color: #e6f2ff;
  width: 100%;
  height: 100% !important;
`;
export const RightContainer = styled(Box)`
  width: 100%;
`;
export const StaticSection = styled(Box)`
  margin: 30px 60px;
`;
export const Image = styled("img")(({ theme }) => ({
  maxHeight: 450,
  minHeight: 350,
  width: "100%",
}));

export const Title = styled(Box)`
  color: #0010f7;
  font-size: 28px;
  font-family: "Manrope", sans-serif;
  align-items: center;
  text-align: center;
`;
export const SubTitle = styled(Typography)`
  color: #636e72;
  font-size: 14px;
  font-family: "Manrope", sans-serif;
  align-items: center;
  text-align: center;
`;
export const LoginText = styled(Typography)`
  color: #2d3436;
  font-family: "Manrope", "sans-serif";
  font-size: 42px;
`;
export const WelcomeText = styled(Typography)`
  color: #b2b3ce;
  font-family: "Manrope", "sans-serif";
  font-size: 14px;
  margin: 10px 0px;
`;
export const Username = styled(Typography)`
  color: #2d3436;
  font-size: 14px;
  font-family: "Manrope", sans-serif;
  line-height: 1.5715;
  margin: 10px 0px;
`;
export const RememberMeText = styled(Typography)`
  color: #2d3436;
  font-size: 14px;
  font-family: "Manrope", sans-serif;
  line-height: 1.5715;
  margin: 10px 0px;
  cursor: pointer;
`;
export const TextInputField = styled(TextField)`
  width: 100%;
  color: #2d3436;
  background-color: #fff;
  border: 1px solid #b2bec3;
  border-radius: 10px;
`;
export const RememberMeBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;
export const ForgetPasswordText = styled(Typography)`
  color: #636e72;
  font-size: 14px;
  font-family: "Manrope", sans-serif;
  cursor: pointer;
`;
export const Btn = styled(Button)`
  margin: 20px 0;
  width: 100%;
  border-radius: 10px;
  font-size: 14px;
  font-family: "Manrope", sans-serif;
  background-color: #0010f7 !important;
  border-color: #0010f7 !important;
  color: #fff;
  text-transform: none;
`;
export const DoNotHaveAccBox = styled(Box)`
  display: flex;
  text-align: center;
  align-items: center;
`;
export const DoNotHaveAccText = styled(Typography)`
  display: flex;
  text-align: center;
  align-items: center;
  color: #636e72;
  font-size: 12px;
  font-family: "Manrope", sans-serif;
`;
export const DoNotHaveAccText2 = styled(Typography)`
  display: flex;
  text-align: center;
  align-items: center;
  color: #0010f7;
  font-size: 12px;
  font-family: "Manrope", sans-serif;
  cursor: pointer;
`;
export const ContinueWithBtn = styled(Button)`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px 0px;
  &:hover {
    background-color: transparent;
  }
`;
export const TermBox = styled(Box)`
  display: flex;
  text-align: center;
  align-items: center;
  margin-top: 30px;
`;
export const TermBoxText = styled(Typography)`
  text-align: center;
  align-items: center;
  color: #636e72;
  font-size: 14px;
  font-family: "Manrope", sans-serif;
`;
export const TermBoxDot = styled(Typography)`
  text-align: center;
  align-items: center;
  color: #636e72;
  font-size: 20px;
  font-weight: 600;
  font-family: "Manrope", sans-serif;
`;
