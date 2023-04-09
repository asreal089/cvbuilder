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
            <h1>500</h1>
            <p>It seems like the server is currently unable to fulfill your request, and as a result, you are seeing the 500 Internal Server Error page. This may be due to a temporary glitch or a more serious issue with the server.</p>
        </main>
      </Container>
    </div>
  );
};

export default notFound;
