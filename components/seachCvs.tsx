import React, { useState } from "react";

import { Button, Container, TextField } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { Cv } from "../util/models/types";
import SearchCard from "./searchCard";

function SearchCV(): JSX.Element {
  // search input field with useState
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Cv[]>([]);

  async function searchCVs() {
    let keywords = "";
    search.split(" ").forEach((word) => {
      keywords += word + ",";
    });
    keywords = keywords.slice(0, -1);
    const axioscfg = { baseURL: process.env.URL };
    const res = await axios.get("/api/search?keywords=" + keywords, axioscfg);

    console.log(res.data);

    setSearchResults(res.data);
  }

  return (
    <Container className="container">
      <div className={styles.searchBoxContainer}>
        <div className={styles.search}>
          <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
          <TextField
            name="skill"
            className="habilidade campoFull campoComPadding"
            type="text"
            label="search ..."
            variant="standard"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.searchButton}>
        <Button variant="contained" color="primary" onClick={searchCVs}>
          Search
        </Button>
      </div>
      <div className={styles.showResults}>
        {searchResults.map((cv, index) => {
          return <SearchCard cv={cv} key={index} />;
        })}
      </div>
    </Container>
  );
}
export default SearchCV;
