"use client";
import React from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        zIndex: 1,
        height: "84px !important",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={{
          backgroundColor: "white",
          borderTop: "0.1px solid #e0e0e0",
          height: "84px",
        }}
      >
        <BottomNavigationAction
          sx={{
            "& .MuiBottomNavigationAction-label": {
              fontSize: "14px",
              fontWeight: 500,
              mt: "12px",
              color:
                value === 0 ? "rgb(255, 50, 93)" : "rgba(107, 114, 128, 1)",
            },
          }}
          label="پروفایل"
          icon={
            value === 0 ? (
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.27083 7.5C7.27083 4.46243 9.83587 2 13 2C16.1641 2 18.7292 4.46243 18.7292 7.5C18.7292 10.5376 16.1641 13 13 13C9.83587 13 7.27083 10.5376 7.27083 7.5Z"
                  fill="rgb(255, 50, 93)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.40017 21C3.9687 21 3.625 20.6642 3.625 20.25V18.75C3.625 16.1266 5.84026 14 8.57292 14H17.4271C20.1597 14 22.375 16.1266 22.375 18.75V20.25C22.375 20.6642 22.0313 21 21.5998 21C18.2932 21 7.70676 21 4.40017 21Z"
                  fill="rgb(255, 50, 93)"
                />
              </svg>
            ) : (
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.27083 7.5C7.27083 4.46243 9.83587 2 13 2C16.1641 2 18.7292 4.46243 18.7292 7.5C18.7292 10.5376 16.1641 13 13 13C9.83587 13 7.27083 10.5376 7.27083 7.5Z"
                  fill="#6B7280"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.40017 21C3.9687 21 3.625 20.6642 3.625 20.25V18.75C3.625 16.1266 5.84026 14 8.57292 14H17.4271C20.1597 14 22.375 16.1266 22.375 18.75V20.25C22.375 20.6642 22.0313 21 21.5998 21C18.2932 21 7.70676 21 4.40017 21Z"
                  fill="#6B7280"
                />
              </svg>
            )
          }
        />
        <BottomNavigationAction
          sx={{
            "& .MuiBottomNavigationAction-label": {
              fontSize: "14px",
              fontWeight: 500,
              mt: "12px",
              color: "rgba(107, 114, 128, 1)!important",
            },
            "&.Mui-selected .MuiBottomNavigationAction-label": {
              color: "rgb(255, 50, 93) !important",
            },
          }}
          label="کیف پول"
          icon={
            value === 1 ? (
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.53119 6C2.53119 4.89543 3.46393 4 4.61452 4H18.7292C20.1674 4 21.3333 5.11929 21.3333 6.5C21.3333 6.53929 21.3302 6.57787 21.3241 6.61552C22.5044 6.95535 23.3645 8.00625 23.3645 9.25V17.25C23.3645 18.7688 22.082 20 20.4999 20H5.39577C3.81371 20 2.53119 18.7688 2.53119 17.25L2.53119 6ZM4.09369 6C4.09369 6.27614 4.32687 6.5 4.61452 6.5H19.7708C19.7708 5.94772 19.3045 5.5 18.7292 5.5H4.61452C4.32687 5.5 4.09369 5.72386 4.09369 6ZM16.125 13.25C16.125 12.4216 16.8245 11.75 17.6875 11.75C18.5504 11.75 19.25 12.4216 19.25 13.25C19.25 14.0784 18.5504 14.75 17.6875 14.75C16.8245 14.75 16.125 14.0784 16.125 13.25Z"
                  fill="rgb(255, 50, 93)"
                />
              </svg>
            ) : (
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.53119 6C2.53119 4.89543 3.46393 4 4.61452 4H18.7292C20.1674 4 21.3333 5.11929 21.3333 6.5C21.3333 6.53929 21.3302 6.57787 21.3241 6.61552C22.5044 6.95535 23.3645 8.00625 23.3645 9.25V17.25C23.3645 18.7688 22.082 20 20.4999 20H5.39577C3.81371 20 2.53119 18.7688 2.53119 17.25L2.53119 6ZM4.09369 6C4.09369 6.27614 4.32687 6.5 4.61452 6.5H19.7708C19.7708 5.94772 19.3045 5.5 18.7292 5.5H4.61452C4.32687 5.5 4.09369 5.72386 4.09369 6ZM16.125 13.25C16.125 12.4216 16.8245 11.75 17.6875 11.75C18.5504 11.75 19.25 12.4216 19.25 13.25C19.25 14.0784 18.5504 14.75 17.6875 14.75C16.8245 14.75 16.125 14.0784 16.125 13.25Z"
                  fill="#6B7280"
                />
              </svg>
            )
          }
        />
        <Box sx={{ position: "absolute", top: "-8px" }}>
          <BottomNavigationAction
            icon={
              <Box
                sx={{
                  backgroundColor: "#FF4F6E",
                  borderRadius: "50%",
                  width: "64px",
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "-24px",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.666672 14C0.666672 6.63621 6.63621 0.666672 14 0.666672C21.3638 0.666672 27.3333 6.63621 27.3333 14C27.3333 21.3638 21.3638 27.3333 14 27.3333C12.0551 27.3333 10.2049 26.9163 8.53624 26.1658C8.4357 26.1206 8.34444 26.1154 8.27598 26.1308L3.64786 27.1713C1.95964 27.5508 0.460114 26.0252 0.868715 24.3438L1.94762 19.904C1.965 19.8325 1.95998 19.7364 1.91097 19.6313C1.11225 17.9193 0.666672 16.0103 0.666672 14ZM6.66667 14C6.66667 14.7364 7.26363 15.3333 8.00001 15.3333C8.73639 15.3333 9.33334 14.7364 9.33334 14C9.33334 13.2636 8.73639 12.6667 8.00001 12.6667C7.26363 12.6667 6.66667 13.2636 6.66667 14ZM12.6667 14C12.6667 14.7364 13.2636 15.3333 14 15.3333C14.7364 15.3333 15.3333 14.7364 15.3333 14C15.3333 13.2636 14.7364 12.6667 14 12.6667C13.2636 12.6667 12.6667 13.2636 12.6667 14ZM20 15.3333C19.2636 15.3333 18.6667 14.7364 18.6667 14C18.6667 13.2636 19.2636 12.6667 20 12.6667C20.7364 12.6667 21.3333 13.2636 21.3333 14C21.3333 14.7364 20.7364 15.3333 20 15.3333Z"
                    fill="#FFF7F8"
                  />
                </svg>
              </Box>
            }
          />
        </Box>
        <Box sx={{ width: "10%" }}></Box>
        <BottomNavigationAction
          sx={{
            "& .MuiBottomNavigationAction-label": {
              fontSize: "14px",
              fontWeight: 500,
              mt: "12px",
              color: "rgba(107, 114, 128, 1)!important",
            },
            "&.Mui-selected .MuiBottomNavigationAction-label": {
              color: "rgb(255, 50, 93) !important",
            },
          }}
          label="فروشگاه"
          icon={
            value === 4 ? (
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.33214 4.07152C5.87449 3.39581 6.71257 3 7.60092 3H18.3991C19.2874 3 20.1255 3.39582 20.6679 4.07152L23.2542 7.29378C23.3595 7.42504 23.4167 7.5861 23.4167 7.75183V8.75222C23.4167 9.74304 23.0074 10.6414 22.3461 11.3086V18.2489C22.3461 19.7683 21.0635 21 19.4815 21H6.51851C4.93645 21 3.65393 19.7683 3.65393 18.2489V11.3086C2.99259 10.6414 2.58333 9.74304 2.58333 8.75222V7.75183C2.58333 7.5861 2.64047 7.42504 2.74582 7.29378L5.33214 4.07152ZM5.21643 12.2803V18.2489C5.21643 18.9396 5.79939 19.4994 6.51851 19.4994H10.0775L10.0775 17.2485C10.0776 15.7099 11.4063 14.4975 13 14.4975C14.5937 14.4975 15.9224 15.7099 15.9224 17.2486L15.9224 19.4994H19.4815C20.2006 19.4994 20.7836 18.9396 20.7836 18.2489V12.2803C20.3585 12.4249 19.9003 12.5037 19.4236 12.5037C18.1156 12.5037 16.9426 11.9086 16.2118 10.9824C15.481 11.9086 14.308 12.5037 13 12.5037C11.692 12.5037 10.519 11.9087 9.78819 10.9824C9.05735 11.9087 7.88441 12.5037 6.57638 12.5037C6.09965 12.5037 5.6415 12.4249 5.21643 12.2803Z"
                  fill="rgb(255, 50, 93)"
                />
              </svg>
            ) : (
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.33214 4.07152C5.87449 3.39581 6.71257 3 7.60092 3H18.3991C19.2874 3 20.1255 3.39582 20.6679 4.07152L23.2542 7.29378C23.3595 7.42504 23.4167 7.5861 23.4167 7.75183V8.75222C23.4167 9.74304 23.0074 10.6414 22.3461 11.3086V18.2489C22.3461 19.7683 21.0635 21 19.4815 21H6.51851C4.93645 21 3.65393 19.7683 3.65393 18.2489V11.3086C2.99259 10.6414 2.58333 9.74304 2.58333 8.75222V7.75183C2.58333 7.5861 2.64047 7.42504 2.74582 7.29378L5.33214 4.07152ZM5.21643 12.2803V18.2489C5.21643 18.9396 5.79939 19.4994 6.51851 19.4994H10.0775L10.0775 17.2485C10.0776 15.7099 11.4063 14.4975 13 14.4975C14.5937 14.4975 15.9224 15.7099 15.9224 17.2486L15.9224 19.4994H19.4815C20.2006 19.4994 20.7836 18.9396 20.7836 18.2489V12.2803C20.3585 12.4249 19.9003 12.5037 19.4236 12.5037C18.1156 12.5037 16.9426 11.9086 16.2118 10.9824C15.481 11.9086 14.308 12.5037 13 12.5037C11.692 12.5037 10.519 11.9087 9.78819 10.9824C9.05735 11.9087 7.88441 12.5037 6.57638 12.5037C6.09965 12.5037 5.6415 12.4249 5.21643 12.2803Z"
                  fill="#6B7280"
                />
              </svg>
            )
          }
        />
        <BottomNavigationAction
          sx={{
            "& .MuiBottomNavigationAction-label": {
              fontSize: "14px",
              fontWeight: 500,
              mt: "12px",
              color: "rgba(107, 114, 128, 1)!important",
            },
            "&.Mui-selected .MuiBottomNavigationAction-label": {
              color: "rgb(255, 50, 93) !important",
            },
          }}
          label="کدهای من"
          icon={
            value === 5 ? (
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.53125 2C5.94918 2 4.66666 3.23122 4.66666 4.75V21.25C4.66666 21.544 4.84557 21.8108 5.12428 21.9326C5.40298 22.0544 5.73011 22.0086 5.96102 21.8156L8.11204 20.017L10.0271 21.7899C10.3298 22.07 10.8091 22.07 11.1117 21.7899L13 20.0419L14.8883 21.7899C15.1909 22.07 15.6702 22.07 15.9728 21.7899L17.888 20.017L20.039 21.8156C20.2699 22.0086 20.597 22.0544 20.8757 21.9326C21.1544 21.8108 21.3333 21.544 21.3333 21.25V4.75C21.3333 3.23122 20.0508 2 18.4687 2H7.53125ZM16.95 8.28033C17.2551 7.98744 17.2551 7.51256 16.95 7.21967C16.645 6.92678 16.1503 6.92678 15.8452 7.21967L9.07436 13.7197C8.76926 14.0126 8.76926 14.4874 9.07436 14.7803C9.37946 15.0732 9.87412 15.0732 10.1792 14.7803L16.95 8.28033ZM9.875 9C9.2997 9 8.83333 8.55228 8.83333 8C8.83333 7.44772 9.2997 7 9.875 7C10.4503 7 10.9167 7.44772 10.9167 8C10.9167 8.55228 10.4503 9 9.875 9ZM15.0833 14C15.0833 14.5523 15.5497 15 16.125 15C16.7003 15 17.1667 14.5523 17.1667 14C17.1667 13.4477 16.7003 13 16.125 13C15.5497 13 15.0833 13.4477 15.0833 14Z"
                  fill="rgb(255, 50, 93)"
                />
              </svg>
            ) : (
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.53125 2C5.94918 2 4.66666 3.23122 4.66666 4.75V21.25C4.66666 21.544 4.84557 21.8108 5.12428 21.9326C5.40298 22.0544 5.73011 22.0086 5.96102 21.8156L8.11204 20.017L10.0271 21.7899C10.3298 22.07 10.8091 22.07 11.1117 21.7899L13 20.0419L14.8883 21.7899C15.1909 22.07 15.6702 22.07 15.9728 21.7899L17.888 20.017L20.039 21.8156C20.2699 22.0086 20.597 22.0544 20.8757 21.9326C21.1544 21.8108 21.3333 21.544 21.3333 21.25V4.75C21.3333 3.23122 20.0508 2 18.4687 2H7.53125ZM16.95 8.28033C17.2551 7.98744 17.2551 7.51256 16.95 7.21967C16.645 6.92678 16.1503 6.92678 15.8452 7.21967L9.07436 13.7197C8.76926 14.0126 8.76926 14.4874 9.07436 14.7803C9.37946 15.0732 9.87412 15.0732 10.1792 14.7803L16.95 8.28033ZM9.875 9C9.2997 9 8.83333 8.55228 8.83333 8C8.83333 7.44772 9.2997 7 9.875 7C10.4503 7 10.9167 7.44772 10.9167 8C10.9167 8.55228 10.4503 9 9.875 9ZM15.0833 14C15.0833 14.5523 15.5497 15 16.125 15C16.7003 15 17.1667 14.5523 17.1667 14C17.1667 13.4477 16.7003 13 16.125 13C15.5497 13 15.0833 13.4477 15.0833 14Z"
                  fill="#6B7280"
                />
              </svg>
            )
          }
        />
      </BottomNavigation>
    </Box>
  );
}
