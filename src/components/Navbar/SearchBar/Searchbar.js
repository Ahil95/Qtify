import {
  InputAdornment,
  InputBase,
  TextField,
  alpha,
  styled,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f2f2f2",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  color: "grey",
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Searchbar = () => {
  return (
    <div>
      <TextField
        // label="Project"
        placeholder="Search a album of your choice"
        // focused
        // onChange={handleSearch}
        id="outlined-start-adornment"
        sx={{
          width: "40vw",
          background: "white",
          borderRadius: "5px",
          fontSize: "12px",
          outline: "none",
          border: "1px solid black",
          ".MuiInputBase-root, .MuiOutlinedInput-root, .MuiInputBase-colorPrimary, .MuiInputBase-formControl, .MuiInputBase-adornedEnd, .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root":
            {
              height: "2rem",
            },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" variant="filled">
              <SearchIcon
                sx={{
                  borderLeft: "1px solid black",
                  height: "2rem",
                  paddingLeft: "15px",
                }}
              />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Searchbar;
