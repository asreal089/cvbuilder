import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import styles from "../styles/Home.module.css";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Cv } from "../util/models/types";
import { Avatar } from "@material-ui/core";

interface CardData {
  cv: Cv;
  key: number;
}

const SearchCard: FunctionComponent<CardData> = ({ cv, key }): JSX.Element => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/cv/${cv.id_usuario}`);
  };

  console.log(cv.img_url);

  return (
    <Card className={styles.card} key={key} onClick={handleClick}>
      
      <CardContent>
        <Avatar alt={cv.nome} src={cv.img_url} />
        <Typography variant="h5" component="div">
          {cv.nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>{cv.email}</p>
          <p>{cv.localidade}</p>
          <div className={styles.keywords}>
            {cv.titulo_palavras_chave.map((keyword, index) => {
              return <span key={keyword} className={styles.keyword}>
                    {keyword}
                  </span>;
            })}
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SearchCard;
