import React, { useRef, useState } from "react";

import styles from "../styles/Cv.module.css";

import { Cv, Experiencia } from "../util/models/types";
import { parseISO, format } from "date-fns";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { generatePdf } from "../util/pdf/exportPdf";
import ExportingModal from "./exportingModal";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShareModal from "./shareModal";
import ContactModal from "./contactModal";
import ContactMailIcon from "@mui/icons-material/ContactMail";

interface Data {
  data: Cv;
}

interface Contact {
  email: string;
  whatsapp: string;
}

function CvView({ data }: Data): JSX.Element {
  const componentRef = useRef<HTMLDivElement>(null);
  const [loadingFlag, setLoadingFlag] = useState<boolean>(false);
  const [shareModalFlag, setShareModalFlag] = useState<boolean>(false);
  const [contactModalFlag, setContactModalFlag] = useState<boolean>(false);

  const contact: Contact = {
    email: data.email,
    whatsapp: data.phone_whatsapp,
  };

  const whatsappLink = `https://wa.me/${data.phone_whatsapp}`;

  function handleDownload() {
    setLoadingFlag(true);
    generatePdf(componentRef, data.nome);
  }

  function handleContact() {
    setContactModalFlag(true);
  }

  function handleShare() {
    setShareModalFlag(true);
  }

  function closeShareModal() {
    setShareModalFlag(false);
  }

  function closeContactModal() {
    setContactModalFlag(false);
  }

  return (
    <>
      <div className={styles.exportButtonContainer}>
        <button onClick={handleDownload}>
          <PictureAsPdfIcon />
        </button>
        <button onClick={handleShare}>
          <ShareIcon />
        </button>
        <button onClick={handleContact}>
          <ContactMailIcon />
        </button>
      </div>
      <ExportingModal show={loadingFlag} />
      <ShareModal show={shareModalFlag} onClose={closeShareModal} />
      <ContactModal
        show={contactModalFlag}
        onClose={closeContactModal}
        contact={contact}
      />
      <div className={styles.cvcontent}>
        <div ref={componentRef}>
          <h1 className={styles.title}>CV</h1>

          <div className={styles.header}>
            <h1 className={styles.name}>{data.nome}</h1>
            {data.titulo_palavras_chave.length > 0 && (
              <div className={styles.keywords}>
                {data.titulo_palavras_chave.map((keyword, index) => (
                  <span key={keyword} className={styles.keyword}>
                    {keyword}
                  </span>
                ))}
              </div>
            )}
            {data.email && (
              <p className={styles.texticon}>
                <EmailIcon />
                {data.email}
              </p>
            )}
            {data.phone_whatsapp && (
              <p className={styles.texticon}>
                <WhatsAppIcon />
                <Link href={whatsappLink}>{data.phone_whatsapp}</Link>
              </p>
            )}
            {data.localidade && (
              <p className={styles.texticon}>
                <LocationOnIcon />
                {data.localidade}
              </p>
            )}
            {data.links.length > 0 && (
              <section className={styles.section}>
                <h2>Links:</h2>
                {data.links.map((link, index) => (
                  <p key={index} className={styles.texticon}>
                    {((link.tipo.includes("Git") ||
                      link.tipo.includes("git")) && <GitHubIcon />) ||
                      ((link.tipo.includes("Linked") ||
                        link.tipo.includes("linked")) && <LinkedInIcon />) || (
                        <InsertLinkIcon />
                      )}{" "}
                    {link.tipo}:{" "}
                    <Link href={link.link} shallow={true}>
                      {link.link}
                    </Link>
                  </p>
                ))}
              </section>
            )}
            {data.linguas.length > 0 && (
              <section className={styles.section}>
                <h2>Languages:</h2>
                {data.linguas.map((lingua, index) => (
                  <p key={index} className={styles.texticon}>
                    {lingua.lingua}: {lingua.nivel}
                  </p>
                ))}
              </section>
            )}
            {data.habilidades.length > 0 && (
              <section className={styles.section}>
                <h2>Skills</h2>
                <ul className={styles.skillsList}>
                  {data.habilidades.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </section>
            )}

            {data.cover_letter && (
              <section className={styles.section}>
                <h2>Cover Letter</h2>
                <p className={styles.texto}>{data.cover_letter}</p>
              </section>
            )}

            {data.experiencia.length > 0 && (
              <section className={styles.section}>
                <h2>Experience</h2>
                {data.experiencia
                  .sort((a: Experiencia, b: Experiencia) => {
                              const iniDateA = new Date(a.incio);
                              const iniDateB = new Date(b.incio);
                              if (iniDateA < iniDateB) return 1;
                              if (iniDateA > iniDateB) return -1;
                              return 0;
                            })
                  .map((exp, index) => (
                    <div key={index} className={styles.item}>
                      <h4>{exp.titulo}</h4>
                      <h4>{exp.empresa}</h4>
                      <p>
                        {" "}
                        from: {format(
                          parseISO(exp.incio),
                          "yyyy-MM-dd"
                        )} to:{" "}
                        {exp.is_current
                          ? " current"
                          : format(parseISO(exp.fim), "yyyy-MM-dd")}
                      </p>
                      <p className={styles.texto}>{exp.descricao}</p>
                    </div>
                  ))}
              </section>
            )}
            {data.cursos.length > 0 && (
              <section className={styles.section}>
                <h2>Education</h2>
                {data.cursos.map((edu, index) => (
                  <div key={index} className={styles.item}>
                    <strong>{edu.instituicao}</strong>
                    {": "}
                    {edu.duracao} -{" "}
                    {(edu.is_concluded &&
                      format(parseISO(edu.termino), "yyyy-MM-dd")) || (
                      <>pending</>
                    )}
                    {": "}
                    {edu.descricao}
                  </div>
                ))}
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CvView;
