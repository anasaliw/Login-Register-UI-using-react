import { Box, styled } from "@mui/material";

export const RegisterContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  height: 100vh;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
