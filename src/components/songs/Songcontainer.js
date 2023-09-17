import React, { useEffect, useState } from "react";
import Card from "./SongCard";
import { Grid, Button } from "@mui/material"; // Import Button component
import "./SongContainer.css";
import axios from "axios";

const Songcontainer = () => {
  const [topSongList, setTopSongList] = useState([]);
  const [newSongList, setNewSongList] = useState([]);

  const [showMoretop, setShowMoreTop] = useState(false); // State to track show more
  const [showMoreNew, setShowMoreNew] = useState(false); // State to track show more

  const initialCardCount = 6; // Initial number of cards to show

  useEffect(() => {
    topSongs();
    newSongs();
  }, []);

  const topSongs = () => {
    axios
      .get("https://qtify-backend-labs.crio.do/albums/top")
      .then((res) => {
        console.log(res?.data);
        setTopSongList(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const newSongs = () => {
    axios
      .get("https://qtify-backend-labs.crio.do/albums/new")
      .then((res) => {
        console.log(res?.data);
        setNewSongList(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const toggleTop = () => {
    setShowMoreTop(!showMoretop);
  };
  const toggleNew = () => {
    setShowMoreNew(!showMoreNew);
  };

  return (
    <div className="songcontainer">
      <div className="songGridheader">
        <h3 style={{ color: "white" }}>Top Albums</h3>
        {topSongList.length > initialCardCount && (
          <h3
            onClick={toggleTop}
            style={{ marginTop: "10px", color: "#00DC4A", cursor: "pointer" }}
          >
            {showMoretop ? "Collapse" : "Show All"}
          </h3>
        )}
      </div>
      <Grid sx={{ flexGrow: 1 }} container>
        {topSongList
          .slice(0, showMoretop ? topSongList.length : initialCardCount)
          .map((item, index) => (
            <Grid key={index} item xs={4} md={2} lg={2}>
              <Card
                img={item?.image}
                follows={item?.follows}
                songfooter={item?.title}
              />
            </Grid>
          ))}
      </Grid>
      <div className="songGridheader">
        <h3 style={{ color: "white" }}>New Albums</h3>
        {topSongList.length > initialCardCount && (
          <h3
            onClick={toggleNew}
            style={{ marginTop: "10px", color: "#00DC4A", cursor: "pointer" }}
          >
            {showMoreNew ? "Collapse" : "Show All"}
          </h3>
        )}
      </div>
      <Grid sx={{ flexGrow: 1 }} container>
        {newSongList
          .slice(0, showMoreNew ? topSongList.length : initialCardCount)
          .map((item, index) => (
            <Grid key={index} item xs={4} md={2} lg={2}>
              <Card
                img={item?.image}
                follows={item?.follows}
                songfooter={item?.title}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Songcontainer;
