import React, { useEffect, useState } from "react";
import Card from "./SongCard";
import {
  Grid,
  Button,
  Box,
  Typography,
  Tabs,
  Tab,
  Divider,
} from "@mui/material"; // Import Button component
import "./SongContainer.css";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropTypes from "prop-types";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, color: "white" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Songcontainer = () => {
  const initialCardCount = 6;
  const [topSongList, setTopSongList] = useState([]);
  const [newSongList, setNewSongList] = useState([]);
  const [showMoretop, setShowMoreTop] = useState(false); // State to track show more
  const [showMoreNew, setShowMoreNew] = useState(false); // State to track show more
  const [allSongs, setAllSongs] = useState([]);
  const [rockSongs, setRockSongs] = useState([]);
  const [value, setValue] = React.useState(0);
  const [selectedGenre, setSelectedGenre] = useState("all"); // Initialize with "all" genre
  const genres = ["all", "rock", "pop", "jazz", "blues"];
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedGenre(genres[newValue]);
  };
  // Initial number of cards to show
  useEffect(() => {
    topSongs();
    newSongs();
    AllSongs();
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
  const AllSongs = () => {
    axios
      .get("https://qtify-backend-labs.crio.do/songs")
      .then((res) => {
        console.log(res?.data);
        setAllSongs(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const filteredData =
    value === 0
      ? allSongs // Show all items if "all" is selected
      : allSongs.filter((item) => item.genre.key === selectedGenre);

  console.log({ filteredData });
  const toggleTop = () => {
    setShowMoreTop(!showMoretop);
  };
  const toggleNew = () => {
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
      {showMoreNew ? (
        <Grid sx={{ flexGrow: 1 }} container>
          {newSongList.map((item, index) => (
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
            {newSongList.map((item, index) => (
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
      <Divider sx={{ background: "green", marginTop: "20px" }}></Divider>
      <div className="songGridheader">
        <h3 style={{ color: "white" }}>Songs</h3>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 2,
            borderColor: "divider",
            ".MuiTabs-indicator": {
              backgroundColor: "green",
            },
            ".MuiButtonBase-root-MuiTab-root.Mui-selected ": {
              color: "white",
            },
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="white"
          >
            {genres.map((genre, index) => (
              <Tab
                label={genre}
                {...a11yProps(index)}
                key={genre}
                sx={{
                  color: "#ffff",
                  fontWeight: "600",
                }}
              />
            ))}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Carousel responsive={responsive}>
            {allSongs.map((item, index) => (
              <div key={index}>
                <Card
                  img={item?.image}
                  follows={item?.follows}
                  songfooter={item?.title}
                  likes={item?.likes}
                />
              </div>
            ))}
          </Carousel>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Carousel responsive={responsive}>
            {filteredData.map((item, index) => (
              <div key={index}>
                <Card
                  img={item?.image}
                  follows={item?.follows}
                  songfooter={item?.title}
                  likes={item?.likes}
                />
              </div>
            ))}
          </Carousel>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Carousel responsive={responsive}>
            {filteredData.map((item, index) => (
              <div key={index}>
                <Card
                  img={item?.image}
                  follows={item?.follows}
                  songfooter={item?.title}
                  likes={item?.likes}
                />
              </div>
            ))}
          </Carousel>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Carousel responsive={responsive}>
            {filteredData.map((item, index) => (
              <div key={index}>
                <Card
                  img={item?.image}
                  follows={item?.follows}
                  songfooter={item?.title}
                  likes={item?.likes}
                />
              </div>
            ))}
          </Carousel>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <Carousel responsive={responsive}>
            {filteredData.map((item, index) => (
              <div key={index}>
                <Card
                  img={item?.image}
                  follows={item?.follows}
                  songfooter={item?.title}
                  likes={item?.likes}
                />
              </div>
            ))}
          </Carousel>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <Carousel responsive={responsive}>
            {filteredData.map((item, index) => (
              <div key={index}>
                <Card
                  img={item?.image}
                  follows={item?.follows}
                  songfooter={item?.title}
                  likes={item?.likes}
                />
              </div>
            ))}
          </Carousel>
        </CustomTabPanel>
      </Box>
      <Divider sx={{ background: "green" }}></Divider>
    </div>
  );
};
export default Songcontainer;
