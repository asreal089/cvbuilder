import React from "react";

import styles from "../styles/Cv.module.css";

import { Cv } from "../util/models/types";
import { parseISO, format } from "date-fns";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";

interface Data {
  data: Cv;
}

function CvView({ data }: Data): JSX.Element {
  return (
    <div className={styles.cvcontent}>
      <h1 className={styles.title}>CV</h1>

      <header className={styles.header}>
        <h1 className={styles.name}>{data.nome}</h1>
        <div className={styles.keywords}>
          {data.titulo_palavras_chave.map((keyword, index) => (
            <span key={index} className={styles.keyword}>
              {keyword}
            </span>
          ))}
        </div>

        <p className={styles.texticon}><EmailIcon />{data.email}</p>
        <p className={styles.texticon}><LocationOnIcon />{data.localidade}</p>
        <section className={styles.section}>
          <h2>Links:</h2>
            {data.links.map((link, index) => (
                <p key={index} className={styles.texticon}>
                  {((link.tipo.includes("Git") || link.tipo.includes("git") )  && <GitHubIcon /> ) ||
                  ((link.tipo.includes("Linked") || link.tipo.includes("linked") )  && <LinkedInIcon /> )||
                  <InsertLinkIcon/>
                  } {link.tipo} : <Link href={link.link}>{link.link}</Link> 
                </p>
            ))}
        </section>
        <section className={styles.section}>
          <h2>Skills</h2>
          <ul className={styles.skillsList}>
            {data.habilidades.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Cover Letter</h2>
          <p className={styles.texto}>{data.cover_letter}</p>
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
                {exp.fim ? format(parseISO(exp.fim), "dd-MM-yyyy") : " current"}
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
    </div>
  );
}

export default CvView;
