import React from "react";


import {
  Cv,
} from "../util/models/types";
import {
  Container,
} from "@material-ui/core";

interface Data {
  data: Cv;
}

function CvView({ data }: Data): JSX.Element {

  
  return (
    <Container className="container">
      <p>view do cv</p>
    </Container>
  );
}

export default CvView;