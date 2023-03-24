import { Container } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

const notFound: NextPage = () => {

  return (
    <div>
      <Head>
        <title>CV Builder</title>
        <meta
          name="description"
          content="a place where you can store your cv"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Container className="container">
        <main className={styles.main}>
            <h1>404</h1>
            <p>pagina não encontrada</p>
        </main>
      </Container>
    </div>
  );
};

export default notFound;
