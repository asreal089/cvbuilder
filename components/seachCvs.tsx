import React, { useState } from "react";

import { Button, Container, TextField } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/Home.module.css";






function SearchCV(): JSX.Element {

  // search input field with useState
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  function searchCVs() {

    console.log("searchCVs");
    console.log(search);
  
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
                  onChange={e => setSearch(e.target.value)}
                />
          
        </div>
      </div>

   
      <div className={styles.searchButton}>
          <Button variant="contained" color="primary" onClick={searchCVs}>
            Search
          </Button>
        </div>
    </Container>
  );
}
export default SearchCV;
