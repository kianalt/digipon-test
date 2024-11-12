import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
const MyCode = () => {
  return (
    <Stack
      sx={{ width: { lg: "70%", md: "80%", xs: "80%" }, margin: "140px auto" }}
    >
      <Box
        sx={{
          position: "relative",
          minWidth: "254px",
          width: "100%",
          minHeight: { xs: "180px", md: "300px" },
        }}
      >
        <Image src="/assets/noCard.png" layout="fill" />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            color: "rgba(81, 81, 81, 1)",
            fontWeight: "500",
            mt: "28px",
            fontSize: { md: "18px", xs: "16px" },
          }}
        >
          کارتی برای نمایش برای شما وجود ندارد
        </Typography>
      </Box>
      <Box
        sx={{
          mt: { lg: "100px", md: "70px", xs: "40px" },
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Button
          sx={{
            backgroundColor: "rgba(255, 50, 93, 1)",
            borderRadius: "10px",
            width: { xs: "100%", md: "50%", lg: "30%" },
            minWidth: "112px",
            padding: "12px",
          }}
        >
          <Typography
            sx={{
              fontSize: { md: "30px", xs: "20px" },
              fontWeight: "500",
              color: "#FFF",
            }}
          >
            برو به فروشگاه
          </Typography>
        </Button>
      </Box>
    </Stack>
  );
};

export default MyCode;
