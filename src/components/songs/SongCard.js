import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const SongCard = (props) => {
  return (
    <div>
      <Card sx={{ maxWidth: 250, borderRadius: "15px", height: "20rem" }}>
        <CardMedia
          sx={{ height: 270 }}
          image={props?.img}
          title="bollywoodimage"
        />

        <CardActions>
          {props.follows && props.follows !== "" && (
            <Button
              size="small"
              sx={{ borderRadius: "10px", background: "black", color: "white" }}
            >
              {props.follows}
            </Button>
          )}
          {props.likes && props.likes !== "" && (
            <Button
              size="small"
              sx={{ borderRadius: "10px", background: "black", color: "white" }}
            >
              {props.likes}
            </Button>
          )}
        </CardActions>
      </Card>
      <Typography
        gutterBottom
        // variant="h5"
        component="p"
        sx={{ color: "white", fontSize: "18px", marginTop: "10px" }}
      >
        {props?.songfooter}
      </Typography>
    </div>
  );
};

export default SongCard;
