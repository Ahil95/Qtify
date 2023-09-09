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
          <Button
            size="small"
            sx={{ borderRadius: "10px", background: "black", color: "white" }}
          >
            {props?.follows}
          </Button>
        </CardActions>
      </Card>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ color: "white" }}
      >
        {props?.songfooter}
      </Typography>
    </div>
  );
};

export default SongCard;
