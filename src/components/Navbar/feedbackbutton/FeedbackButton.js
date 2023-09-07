import { Button } from "@mui/material";
import React from "react";

const FeedbackButton = () => {
  return (
    <Button
      sx={{
        background: "black",
        color: "#00DC4A",
        ":hover": "black",
        borderRadius: "10px",
        fontWeight: "800",
      }}
    >
      Give Feedback
    </Button>
  );
};

export default FeedbackButton;
