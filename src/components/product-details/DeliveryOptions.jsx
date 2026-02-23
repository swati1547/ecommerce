import React from "react";
import { Box } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import MobileScreenShareOutlinedIcon from "@mui/icons-material/MobileScreenShareOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function DeliveryOptions() {
  return (
    <Box className="delivery">
      <h3 className="delivery__title">
        Delivery Options
        <LocalShippingOutlinedIcon
          sx={{
            fontSize: 20,
            verticalAlign: "middle",
            paddingBottom: "3px",
            marginLeft: "10px",
          }}
        />
      </h3>

      {/*  */}

      <div className="delivery__address">
        <span>400708</span>
        <span>( Swati Garje )</span>
        <CheckCircleIcon sx={{ fontSize: "18px", color: "#1ec471ca" }} />
        <p className="delivery__address_changebtn">Change</p>
      </div>

      {/*  */}

      <div className="delivery__feature">
        <LocalShippingOutlinedIcon
          sx={{
            fontSize: "32px",
            color: "#999b9eca",
          }}
        />
        <p className="delivery__text">Get it by Sat, Feb 14</p>
      </div>
      <div className="delivery__feature">
        <MobileScreenShareOutlinedIcon
          sx={{ fontSize: "32px", color: "#999b9eca" }}
        />
        <p className="delivery__text">Pay on delivery available</p>
      </div>
      <div className="delivery__feature">
        <AutorenewOutlinedIcon sx={{ fontSize: "32px", color: "#999b9eca" }} />
        <p className="delivery__text">
          Easy 14 days return & exchange available
        </p>
        <div className="delivery__info">
          <p className="delivery__info_text">MORE INFO</p>
          <ChevronRightOutlinedIcon
            sx={{ fontSize: "18px", color: "#ff3e6c" }}
          />
        </div>
      </div>
    </Box>
  );
}
