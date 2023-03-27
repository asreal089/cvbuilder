import React from "react";

import styles from "../styles/Cv.module.css";

import { Cv } from "../util/models/types";
import { Container } from "@material-ui/core";
import { parseISO, format } from "date-fns";

interface Data {
  data: Cv;
}

function CvView({ data }: Data): JSX.Element {
  return (
    <body className={styles.body}>
      <Container className="container">
        <h1 className={styles.title}>CV</h1>

        <header className={styles.header}>
          <h1 className={styles.name}>{data.nome}</h1>
          <p className={styles.contact}>{data.email}</p>
          <p className={styles.contact}>{data.localidade}</p>
          <div className={styles.keywords}>
            {data.titulo_palavras_chave.map((keyword, index) => (
              <span key={index} className={styles.keyword}>
                {keyword}
              </span>
            ))}
          </div>
          <section className={styles.section}>
            <h2>Skills</h2>
            <ul className={styles.skillsList}>
              {data.habilidades.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Experience</h2>
            {data.experiencia.map((exp, index) => (
              <div key={index} className={styles.item}>
                <h4>{exp.titulo}</h4>
                <h4>{exp.empresa}</h4>
                <p>
                  {" "}
                  from: {format(parseISO(exp.incio), "dd-MM-yyyy")} to:
                  {exp.fim ? format(parseISO(exp.fim), "dd-MM-yyyy") : "atual"}
                </p>
                <p className={styles.texto}>{exp.descricao}</p>
              </div>
            ))}
          </section>
          <section className={styles.section}>
            <h2>Education</h2>
            {data.cursos.map((edu, index) => (
              <div key={index} className={styles.item}>
                <h4>{edu.instituicao}</h4>
                <h4>{edu.duracao}</h4>
                <p>{edu.descricao}</p>
              </div>
            ))}
          </section>
        </header>
      </Container>
    </body>
  );
}

export default CvView;
