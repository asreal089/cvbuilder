import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import styles from "../styles/Home.module.css";
import { Cv } from "../util/models/types";
import Image from "next/image";

interface CardData {
  cv: Cv;
  key: number;
}

const SearchCard: FunctionComponent<CardData> = ({ cv, key }): JSX.Element => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/cv/${cv.id_usuario}`);
  };

  return (
    <Card className={styles.card} key={key} onClick={handleClick}>
      
      <div>
        <Image alt={cv.nome} src={cv.img_url} />
        <div>
          {cv.nome}
        </div>
        <div color="text.secondary">
          <p>{cv.email}</p>
          <p>{cv.localidade}</p>
          <div className={styles.keywords}>
            {cv.titulo_palavras_chave.map((keyword, index) => {
              return <span key={keyword} className={styles.keyword}>
                    {keyword}
                  </span>;
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SearchCard;
