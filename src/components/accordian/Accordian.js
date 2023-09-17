import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Accordian.css";
export default function BasicAccordion() {
  return (
    <div className="accordian-container">
      <Accordion sx={{ padding: "20px", background: "transparent" }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "#34C94B",
                fontSize: "50px",
              }}
            />
          }
          sx={{
            border: "1px solid white",
            borderRadius: "5px 5px 0 0  ",
            padding: "15px",
          }}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ color: "white" }}>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ background: "white", borderRadius: "0 0 5px 5px " }}
        >
          <Typography>Yes! It is 100% free, and has 0% adds.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ padding: "20px", background: "transparent" }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "#34C94B",
                fontSize: "50px",
              }}
            />
          }
          sx={{
            border: "1px solid white",
            borderRadius: "5px 5px 0 0  ",
            padding: "15px",
          }}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ color: "white" }}>
            Can I download and listen to songs offline?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ background: "white", borderRadius: "0 0 5px 5px " }}
        >
          <Typography>
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
