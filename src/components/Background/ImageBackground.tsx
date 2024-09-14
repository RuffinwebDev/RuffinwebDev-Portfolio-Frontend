import * as React from "react";
import gridBackground from "/media/gridIso.png";
import { SxProps, Theme } from "@mui/material";

const ImageBackground = () => {
  const containerStyle: SxProps<Theme> = {
    position: "fixed",
    right: "0",
    bottom: "0",
    minWidth: "100%",
    minHeight: "100%",
    zIndex: "-1",
    overflow: "hidden",
  };

  const imageStyle: SxProps<Theme> = {
    position: "absolute",
    right: "0",
    bottom: "0",
    minWidth: "100%",
    minHeight: "100%",
    objectFit: "cover",
  };

  const overlayStyle: SxProps<Theme> = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
  };

  return (
    <div style={containerStyle}>
      <img
        src={gridBackground}
        style={imageStyle as React.CSSProperties}
        alt="Grid Background"
        id="imageBackground"
      />
      <div style={overlayStyle}></div> {/* Translucent overlay */}
    </div>
  );
};

export default ImageBackground;
