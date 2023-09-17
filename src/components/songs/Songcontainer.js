import React, { useEffect, useState } from "react";
import Card from "./SongCard";
import { Grid, Button } from "@mui/material"; // Import Button component
import "./SongContainer.css";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Songcontainer = () => {
  const initialCardCount = 6;
  const [topSongList, setTopSongList] = useState([]);
  const [newSongList, setNewSongList] = useState([]);
  const [showMoretop, setShowMoreTop] = useState(false); // State to track show more
  const [showMoreNew, setShowMoreNew] = useState(false); // State to track show more
  const [showMoreTopCount, setShowMoreTopCount] = useState(initialCardCount);
  const [showMoreNewCount, setShowMoreNewCount] = useState(initialCardCount);
  // Initial number of cards to show
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
    setShowMoreTopCount(showMoretop ? initialCardCount : topSongList.length);
    setShowMoreTop(!showMoretop);
  };
  const toggleNew = () => {
    setShowMoreNewCount(showMoreNew ? initialCardCount : newSongList.length);
    setShowMoreNew(!showMoreNew);
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
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
      {showMoretop ? (
        <Grid sx={{ flexGrow: 1 }} container>
          {topSongList.map((item, index) => (
            <Grid key={index} item xs={4} md={2} lg={2}>
              <Card
                img={item?.image}
                follows={item?.follows}
                songfooter={item?.title}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div className="carousel-container">
          <Carousel responsive={responsive}>
            {topSongList.map((item, index) => (
              <div key={index}>
                <Card
                  img={item?.image}
                  follows={item?.follows}
                  songfooter={item?.title}
                />
              </div>
            ))}
          </Carousel>
        </div>
      )}
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
        {newSongList.slice(0, showMoreNewCount).map((item, index) => (
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
