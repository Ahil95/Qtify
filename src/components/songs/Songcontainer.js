import React from "react";
import Card from "./SongCard";
import Bollywood from "../../asset/Bollywood.png";
import { Grid } from "@mui/material";
import "./SongContainer.css";

const Songcontainer = () => {
  return (
    <div class="songcontainer">
      <h3 style={{ color: "white" }}>Top Albums</h3>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={4}>
          <Card
            img={Bollywood}
            follows="100 Follows"
            songfooter="New Bollywood"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Songcontainer;
