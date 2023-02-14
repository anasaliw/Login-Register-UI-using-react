import React from "react";
import { Box } from "@mui/material";
import { LeftContainer, Image, Title, SubTitle, StaticSection } from "./styles";

function LoginLeft() {
  return (
    <>
      <LeftContainer>
        <Box style={{ margin: 64, position: "absolute" }}>
          <img src='assets/images/logo.svg' alt='logo' />
          {/* <img src={logo} alt='logo' /> */}
          {/* <img src={require("./assets/teacher.jpg")} alt='logo' /> */}
        </Box>
        <StaticSection>
          {/* <Box style={{ maxWidth: 450, minWidth: 300, width: 450 }}> */}
          <Box style={{ width: "100%" }}>
            <img
              src='assets/images/leftImage.svg'
              alt='leftImage'
              style={{ width: "100%" }}
            />
          </Box>
          <Title>
            Very good works are waiting for you<br></br> 🤞
          </Title>
          <SubTitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </SubTitle>
        </StaticSection>
      </LeftContainer>
    </>
  );
}

export default LoginLeft;
