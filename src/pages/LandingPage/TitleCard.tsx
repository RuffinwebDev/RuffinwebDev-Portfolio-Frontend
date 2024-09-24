import React, { forwardRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GsapReveal from "./GsapReveal";
import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { SxProps, Theme } from "@mui/system";

type TitleCardProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  titleStyle?: React.CSSProperties;
  subtitleStyle?: React.CSSProperties;
  descriptionStyle?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
  containerStyle?: SxProps<Theme>;
  onButtonClick?: () => void;
};

const TitleCard = forwardRef<HTMLDivElement, TitleCardProps>(
  (
    {
      title = "Elijah Ruffin",
      subtitle = "Full-Stack Developer",
      description = "Washington D.C.",
      buttonText = "View My Work",
      buttonLink = "https://github.com/ruffinweb?tab=repositories",
      subtitleStyle,
      descriptionStyle,
      buttonStyle,
      containerStyle,
      onButtonClick,
    },
    ref,
  ) => {
    const theme = useTheme();

    const titleCardStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "column",
      gap: "0px",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      borderRadius: "10px",
      width: "100%",
      height: "85vh",
      padding: "0 20px",
      "@media (max-width: 1280px)": {
        margin: "0",
      },
      ...containerStyle, // Merge with custom styles from props
    };

    const titleStyle: React.CSSProperties = {
      margin: "0",
    };

    const titleLinkCardStyle: React.CSSProperties = {
      margin: "50px 0 0",
      width: "200px",
      textDecoration: "none",
      ...buttonStyle, // Merge with custom styles from props
    };

    const titleLinkStyle: React.CSSProperties = {
      textDecoration: "none",
      color: `${theme.palette.primary.light}`,
    };

    return (
      <GsapReveal ref={ref}>
        <Box sx={titleCardStyle}>
          <Typography
            variant="h1"
            gutterBottom
            color="primary"
            style={titleStyle}
          >
            {title}
          </Typography>
          <Typography
            variant="h3"
            component="div"
            color="primary"
            style={subtitleStyle}
          >
            {subtitle}
          </Typography>
          <Typography
            variant="h5"
            component="div"
            color="primary"
            style={descriptionStyle}
          >
            {description.split(" • ").map((text, index) => (
              <React.Fragment key={index}>
                {text}
                {index < description.split(" • ").length - 1 && (
                  <Box
                    component="span"
                    sx={{
                      display: "inline-block",
                      mx: "2px",
                      transform: "scale(0.8)",
                    }}
                  >
                    •
                  </Box>
                )}
              </React.Fragment>
            ))}
          </Typography>

          <Link
            sx={titleLinkStyle}
            href={buttonLink}
            target="_blank"
            variant="body2"
          >
            <Button
              sx={titleLinkCardStyle}
              variant="outlined"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </Link>

          <ArrowDownwardIcon sx={{ mt: 0 }} />
        </Box>
      </GsapReveal>
    );
  },
);

TitleCard.displayName = "TitleCard";

export default TitleCard;
