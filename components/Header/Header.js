import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Header = (titie) => {
  return (
    <Stack
      sx={{
        width: "100%",
        position: "sticky",
        minHeight: "103px",
        backgroundColor: "rgba(255, 50, 93, 1)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          bottom: "18px",
          right: "0",
          textAlign: "center",
        }}
      >
        {" "}
        <Typography
          sx={{
            fontSize: { md: "20px", xs: "16px", fontWeight: "500 !important" },
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box sx={{ position: "absolute", right: "16px", bottom: "16px" }}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.75 3C4.23122 3 3 4.23122 3 5.75V7.17157C3 7.90092 3.28973 8.60039 3.80546 9.11612L8.63388 13.9445C8.8683 14.179 9 14.4969 9 14.8284V21.25C9 21.4844 9.10956 21.7053 9.29615 21.8471C9.48275 21.9889 9.72491 22.0354 9.95073 21.9726L14.4507 20.7226C14.7753 20.6325 15 20.3369 15 20V14.8284C15 14.4969 15.1317 14.179 15.3661 13.9445L20.1945 9.11612C20.7103 8.60039 21 7.90092 21 7.17157V5.75C21 4.23122 19.7688 3 18.25 3H5.75Z"
            fill="white"
          />
        </svg>
      </Box>
    </Stack>
  );
};

export default Header;
