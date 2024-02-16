import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { Cv } from "../util/models/types";
import SearchCard from "./searchCard";
import NoSearchResult from "./noResponseSearch";

function SearchCV(): JSX.Element {
  // search input field with useState
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Cv[]>([]);
  const [searched, setSearched] = useState(false);


  async function searchCVs() {
    let keywords = "";
    search.split(" ").forEach((word) => {
      keywords += word + ",";
    });
    keywords = keywords.slice(0, -1);
    const axioscfg = { baseURL: process.env.URL };
    const res = await axios.get("/api/search?keywords=" + keywords, axioscfg);
    setSearched(true);
    setSearchResults(res.data);
  }

  return (
    <div className="container">
      <div className={styles.searchBoxContainer}>
        <div className={styles.search}>
          <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
          <input
            name="skill"
            className="habilidade campoFull campoComPadding"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.searchButton}>
        <div color="primary" onClick={searchCVs}>
          Search
        </div>
      </div>
      <div className={styles.showResults}>
        {(searched && searchResults.length === 0) && <NoSearchResult searchQuery={search} />}
        {searchResults.map((cv, index) => {
          return <SearchCard cv={cv} key={index} />;
        })}
      </div>
    </div>
  );
}
export default SearchCV;
