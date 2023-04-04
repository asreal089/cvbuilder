import React, { FunctionComponent, Props } from "react";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import styles from "../styles/Home.module.css";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Conquistas,
  Curso,
  Experiencia,
  Cv,
  Links,
  Lingua,
} from "../util/models/types";

interface CardData {
  cv: Cv;
}

const SearchCard: FunctionComponent<CardData> = ({ cv }): JSX.Element => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/cv/${cv.id_usuario}`);
  };

  return (
    <Card className={styles.card} key={cv._id} onClick={handleClick}>
      <CardContent>
      <Typography variant="h5" component="div">
          {cv.nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">

        <p>{cv.email}</p>
        <p>{cv.localidade}</p>
        <ul>
          {cv.titulo_palavras_chave.map((keyword) => {
              return <li>{keyword}</li>;
            })}
        </ul>
        <ul>
          {cv.habilidades.map((skill) => {
              return <li>{skill}</li>;
            })}
        </ul>
            </Typography>
      </CardContent>
    </Card>
  );
};

export default SearchCard;
