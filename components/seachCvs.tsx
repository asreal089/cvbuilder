import React from "react";

import { Container, InputBase } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/Home.module.css";

function SearchCV(): JSX.Element {
  return (
    <Container className="container">
      <div className={styles.searchBoxContainer}>
        <div className={styles.search}>
          <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            className={styles.seachinput}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </div>
    </Container>
  );
}
export default SearchCV;
