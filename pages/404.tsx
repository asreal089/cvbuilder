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

      <Container className="container">
        <main className={styles.main}>
            <h1>404</h1>
            <p>It seems like the page you are trying to access is not found, and you are seeing a 404 Page Not Found error. This resource was not found, that could be due to a variety of reasons, such as the page being removed, renamed, or never existed in the first place.</p>
        </main>
      </Container>
    </div>
  );
};

export default notFound;
